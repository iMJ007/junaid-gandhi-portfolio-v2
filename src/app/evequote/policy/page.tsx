import { PolicyLayout } from "@/src/components/layout/PolicyLayout";

export const metadata = {
  title: "Privacy Policy | Evequote",
  description: "Privacy Policy for Evequote mobile application and ecosystem, developed by Junaid Gandhi (Eclectik Devs)."
};

export default function Page() {
  return (
    <PolicyLayout title="Privacy Policy for Evequote">
      <p>
        Welcome to Evequote ("Evequote," "we," "us" or "our"). Respect for your privacy is coded into our DNA. We’ve built our Services with a set of strong privacy principles in mind.
      </p>

      <ul>
        <li>
          Our Privacy Policy explains how we use, share and protect information in relation to our mobile services and your choices about the collection and use of your information.
        </li>
        <li>
          By using our Service you understand and agree that we are providing a platform for you to post content ("User Content"), to the Service and to share User Content publicly. This means that other Users may search for, see, use, or share any of your User Content that you make publicly available through the Service, consistent with the terms and conditions of this Privacy Policy and our Terms of Use.
        </li>
        <li>
          Our Policy applies to all visitors, users, and others who access the Service ("Users").
        </li>
      </ul>

      <h2>1. INFORMATION WE COLLECT</h2>
      <p>We collect the following types of information.</p>

      <h3>Information you provide us directly:</h3>
      <p>
        Your Name, Google Profile Picture, Bio, Website and e-mail address when you register using Google Sign In. This information allows us to help you (and your content) or others (and their content) be "found" on Evequote.
      </p>

      <h3>Analytics information:</h3>
      <p>
        We use Firebase analytics tools to help us measure traffic and usage trends for the Service. These tools collect information sent by your device or our Service, including the quotes you liked, hidden/unhidden email, and date when you posted your content this assists us in improving the Service. We collect and use this analytics information with analytics information from other Users so that it cannot reasonably be used to identify any particular individual User.
      </p>

      <h2>2. HOW WE USE YOUR INFORMATION</h2>
      <p>
        In addition to some of the specific uses of information we describe in this Privacy Policy, we may use information that we receive to:
      </p>
      <ul>
        <li>help you efficiently access your information after you sign in</li>
        <li>remember information so you will not have to re-enter it during your visit or the next time you visit the Service;</li>
        <li>provide, improve, test, and monitor the effectiveness of our Service</li>
        <li>monitor metrics such as total number of visitors, traffic, and demographic patterns</li>
        <li>diagnose or fix technology problems</li>
      </ul>

      <h2>3. SHARING OF YOUR INFORMATION</h2>
      <p>
        We will not rent or sell your information to third parties outside Evequote without your consent.
      </p>
      <p>
        <strong>What happens in the event of a change of control:</strong>
        <br />
        If we sell or otherwise transfer part or the whole of Evequote or our assets to another organization (e.g., in the course of a transaction like a merger, acquisition, bankruptcy, dissolution, liquidation), your information such as name and email address, User Content and any other information collected through the Service may be among the items sold or transferred. You will continue to own your User Content. The buyer or transferee will have to honor the commitments we have made in this Privacy Policy.
      </p>

      <h2>4. HOW WE STORE YOUR INFORMATION</h2>
      <p>
        <strong>Storage and Processing:</strong> Your information collected through the Service may be stored and processed by the Firebase Servers.
        <br />
        <strong>Firebase:</strong> Firebase is a mobile and web application platform with tools and infrastructure designed to help developers build high-quality apps. Firebase is made up of complementary features that developers can mix-and-match to fit their needs.
        <br />
        Parent organization: Alphabet Inc.
        <br />
        Headquarters: San Francisco
      </p>

      <h2>5. YOUR CHOICES ABOUT YOUR INFORMATION</h2>
      <p>
        <strong>Your account information and profile/privacy settings:</strong> You have control whether who sees your email. It is hidden by default.
      </p>
      <p>
        <strong>How long we keep your User Content:</strong> Following termination or deactivation of your account, Evequote, or its Service Providers may not retain any information (including your profile information).
      </p>

      <h2>6. HOW TO CONTACT US ABOUT A DECEASED USER</h2>
      <p>
        In the event of the death of an Evequote User, please contact us. We will usually conduct our communication via email; should we require any other information, we will contact you at the email address you have provided in your request.
      </p>

      <h2>7. HOW TO CONTACT US</h2>
      <p>
        If you have any questions about this Privacy Policy or the Service, please email us at <a href="mailto:eclectik.devs@gmail.com">eclectik.devs@gmail.com</a>.
      </p>

      <h2>8. CHANGES TO OUR PRIVACY POLICY</h2>
      <p>
        Evequote may modify or update this Privacy Policy from time to time, so please review it periodically. We may provide you additional forms of notice of modifications or updates as appropriate under the circumstances. Your continued use of Evequote or the Service after any modification to this Privacy Policy will constitute your acceptance of such modification.
      </p>

      <h2>9. IMAGES IN EVEQUOTE</h2>
      <p>
        Images from all authors, users, categories are hot linked in our app. We don't host any of those images on our servers also we do not own any of these images in any way. Authors and Users images are property of their respective owners.
      </p>

      <h2>10. GOOGLE ADVERTISING</h2>
      <p>Evequote uses Google AdMob/AdSense for in-app advertisements:</p>
      <ul>
        <li>Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to websites.</li>
        <li>Google's use of advertising cookies enables it and its partners to serve ads to you on your visit to sites on the Internet.</li>
        <li>
          You may opt out of personalized advertising by visiting Ads Settings or by using the following link:{" "}
          <a href="https://www.google.com/settings/u/0/ads/authenticated" target="_blank" rel="noopener noreferrer">
            https://www.google.com/settings/u/0/ads/authenticated
          </a>
        </li>
      </ul>
    </PolicyLayout>
  );
}
