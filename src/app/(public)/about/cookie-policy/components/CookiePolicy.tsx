import { Container, Typography } from "@mui/material";
import { Section } from "../../components/Section";

export function CookiePolicy() {
  return (
    <Container>
      <Typography variant="h2">Privacy Policy</Typography>

      <p>
        By using allmylinks.co.uk&apos;s website, you agree that cookies, web beacons, or similar storage technology may be placed on your computer or other device from which you access our webpage. This Cookie Policy describes what types of cookies we use on our website and for what purposes.
      </p>

      <Section title="What are cookies?">
        <p>
          Cookies are small text files created by the website and stored on your device when you visit our homepage. The browser you&apos;re on uses the cookies to forward information back to the website at each subsequent visit for the website to recognize the user and to remember the user’s choices (for example, login information, shopping cart information, and other settings). This can make your next visit easier and the site more useful to you.
        </p>
      </Section>

      <Section title="What Types Of Cookies Do We Use And For What Purposes Do We Use Them?">
        <p>
          We use different types of cookies to run our website. The cookies indicated below may be stored in your browser.
        </p>

        <ul>
          <li>Mandatory cookies. These cookies are important because they are necessary for the smooth operation of the website. Without these cookies, it is impossible to ensure a connection to the user profile and to use the website in full. These cookies identify the user’s device, but do not reveal the identity of the user and do not collect the user’s information. These cookies are stored on the user’s device until the browser closes.</li>
          <li>Functional cookies. These cookies provide convenient and complete use of our website, and they help users efficiently use the website and make it personalized. Functional cookies save the user’s preferences and ensure individual functions, such as the “remember me” functionality that allows users to enter their email and password just once. These cookies are stored permanently on the user’s device.</li>

          <p>

          </p>
          <li>Analytical cookies. These cookies collect information about how users interact with our website, for example, to determine which sections are most frequently visited and which services are most often used. The collected information is used for analytical purposes to understand what interest our users and how to make the webpage more user friendly. For analytical purposes, we may use third-party cookies.

            <p>
            </p> These cookies are stored permanently on the user’s device.</li>
          <li>Third party cookies. Our website uses third-party services, such as analytics services, so we know what is popular on our website and what is not, thus making the website more usable. We are not responsible for third-party cookies. You can learn more about these cookies and their privacy policies by visiting the website of the respective third party. All information processed from third-party cookies are processed by the respective service provider. At any point in

            <p>
            </p>time, you have the right to opt-out from data processing by third-party cookies. For more information, please see the next section of this Cookie Policy.</li>
        </ul>

        <p>
          For example, we may use Google Analytics cookies to help measure how users interact with our website content. These cookies collect information about the user&apos;s interaction with the website, such as unique visits, returning visits, length of the session, actions carried in the webpage, and others.
        </p>
      </Section>

      <Section title="How To Control Cookies?">
        <p>When visiting our website, you are presented with an informative statement that the website uses cookies. If you want to revoke your consent to save cookies on your device, you can delete all cookies stored in your browser and set up your browser to block cookies being saved. By clicking on the “help” button in your browser, you can find instructions on how to prevent the browser from storing cookies, as well as what cookies are stored already and delete them if you want to. You must change the settings for each browser that you use.</p>
        <p>However, please note that without saving certain cookies, it is possible that you will not be able to fully use all the features and services of allmylinks.co.uk&apos;s website.</p>

        <p>
          You can separately opt-out from having your website activity available to Google Analytics by installing the Google Analytics opt-out browser add-on, which prevents sharing information about your website visit with Google Analytics. Link to the add-on and for more information: https://support.google.com/analytics/answer/181881.</p>
      </Section>

      <Section title="Cookie Policy Changes">
        <p>We reserve the right to make changes to this Cookie Policy. Amendments and/or additions to this Cookie Policy will come into force when published on our website.</p>
        <p>By continuing to use our website and/or our services after changes have been made to this Cookie Policy, you are indicating your consent to the new wording in the Cookie Policy. It is your responsibility to regularly check the content of this policy to learn about any changes.  </p>
      </Section>

      <Section title="Contact Information">
        <p>
          If you have any questions about your personal data or this Cookie Policy, or if you would like to file a complaint about how we process your personal data, please contact us by email at hello@allmylinks.co.uk.
        </p>
      </Section>
    </Container>
  );
}