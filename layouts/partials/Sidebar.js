import config from "@config/config.json";
import CustomForm from "@layouts/components/NewsLetterForm";
import Link from "next/link";
import MailchimpSubscribe from "react-mailchimp-subscribe";
const { newsletter } = config.widgets;

const Sidebar = ({ className }) => {
  return (
    <aside className={`${className} lg px-0 lg:col-4 lg:px-6`}>
      {/* activity widget */}
      <div className="rounded border border-border p-6 dark:border-darkmode-border"></div>

      {/* newsletter */}
      {newsletter.enable && (
        <div className="mt-6  rounded border border-border p-6 text-center dark:border-darkmode-border">
          <h4 className="section-title">{newsletter.title}</h4>
          <p className="mt-10 text-xs">{newsletter.content}</p>
          <MailchimpSubscribe
            url={newsletter.malichip_url}
            render={({ subscribe, status, message }) => (
              <CustomForm
                onValidated={(formData) => subscribe(formData)}
                status={status}
                message={message}
              />
            )}
          />
          <p className="text-xs">
            By Singing Up, You Agree To
            <Link
              href={newsletter.privacy_policy_page}
              className="ml-1 text-primary"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
