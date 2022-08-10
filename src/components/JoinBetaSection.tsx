import "./JoinBetaSection.scss";
import gladiaGoddess from "../assets/goddess-400.png";
import { useCallback, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

type Profile = "unknown" | "developer" | "data-analyst" | "data-scientist";

interface JoinBetaSectionProps {
  profile: Profile;
}

export function JoinBetaSection({ profile }: JoinBetaSectionProps) {
  return (
    <section className="join-beta">
      <div className="content">
        <div className="gladia-goddess">
          <img src={gladiaGoddess} aria-hidden="true" />
        </div>
        <h1 className="title">{TITLE[profile]}</h1>
        <JoinBetaForm profile={profile} />
      </div>
    </section>
  );
}

interface JoinBetaFormProps {
  profile: Profile;
}

export function JoinBetaForm({ profile }: JoinBetaFormProps) {
  const { formState, setFormEmail, setFormProfile, onJoinClick } =
    useHubspotForm(profile);
  const joinButtonText = useMemo(() => {
    switch (formState) {
      case "IDLE":
      case "FAIL":
        return "Join";
      case "SAVING":
        return "Saving...";
      case "SAVED":
        return "Saved";
    }
  }, [formState]);
  if (formState === "SAVED") {
    return (
      <div className="join-beta-form-container saved">
        <h3>Welcome aboard! 😃</h3>
        We will contact you as soon as a place for the beta will be available!
      </div>
    );
  }
  return (
    <div className="join-beta-form-container">
      <h2>Join the beta</h2>
      <form>
        {profile === "unknown" && (
          <ProfileSection profile={profile} onChange={setFormProfile} />
        )}
        <div className="email-input">
          <input
            type="email"
            placeholder="j.doe@example.com"
            onChange={(e) => setFormEmail(e.target.value)}
          />
          <button
            onClick={onJoinClick}
            disabled={formState !== "IDLE" && formState !== "FAIL"}
          >
            {joinButtonText}
          </button>
        </div>
        {formState === "FAIL" && (
          <div className="error-message">
            Oops! We failed to register you, can you retry? 😰
          </div>
        )}
      </form>
    </div>
  );
}

interface ProfileSectionProps {
  profile: Profile;
  onChange: (selectedProfile: Profile) => void;
}

function ProfileSection({ profile, onChange }: ProfileSectionProps) {
  return (
    <div className="profile-selection">
      <div className="i-am">I am </div>
      <div className="choices">
        <label htmlFor="profile-developer">
          <input
            type="radio"
            id="profile-developer"
            name="profile"
            value="developer"
            defaultChecked={profile === "developer"}
            onChange={() => onChange("developer")}
          />
          a Developper
        </label>
        <label htmlFor="profile-data-analyst">
          <input
            type="radio"
            id="profile-data-analyst"
            name="profile"
            value="data-analyst"
            defaultChecked={profile === "data-analyst"}
            onChange={() => onChange("data-analyst")}
          />
          a Data Analyst
        </label>
        <label htmlFor="profile-data-scientist">
          <input
            type="radio"
            id="profile-data-scientist"
            name="profile"
            value="data-scientist"
            defaultChecked={profile === "data-scientist"}
            onChange={() => onChange("data-scientist")}
          />
          a Data Scientist
        </label>
      </div>
    </div>
  );
}

const TITLE: Record<Profile, string> = {
  unknown: "Something amazing is coming!",
  developer: "JavaScript power by AI revolution",
  "data-analyst": "Excel Powered by AI revolution",
  "data-scientist": "Python's new AI revolution",
};

type FormState = "IDLE" | "SAVING" | "SAVED" | "FAIL";

function useHubspotForm(defaultProfile: Profile) {
  const [formProfile, setFormProfile] = useState(defaultProfile);
  const [formEmail, setFormEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("IDLE");
  const location = useLocation();
  const route = location.pathname;
  const onJoinClick = useCallback(
    async (event: React.MouseEvent) => {
      event.preventDefault();
      console.log({ formEmail, formProfile, route });
      setFormState("SAVING");
      await postFormToHubspot(formEmail, formProfile, route)
        .then(() => {
          setFormState("SAVED");
        })
        .catch((err) => {
          setFormState("FAIL");
          console.error("error when saving", err);
        });
    },
    [formProfile, formEmail, route]
  );
  return { formState, setFormEmail, setFormProfile, onJoinClick } as const;
}

function postFormToHubspot(email: string, profile: Profile, route: string) {
  const portalId = "25856368";
  const formId = "d5052953-3ca0-4600-bbf8-151408e5a77d";
  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;
  const data = {
    fields: [
      { name: "email", value: email },
      { name: "job_function", value: profile },
    ],
    context: { pageUri: "gladia.io", pageName: route },
  };
  return fetch(url, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(data),
  });
}
