import { PolicyLayout } from "../components/layout/PolicyLayout";

export function SmartScribePolicy() {
  return (
    <PolicyLayout title="Privacy Policy for SmartScribe">
      <p>
        SmartScribe ("Extension") is a Chrome extension that helps users to
        generate text using the GPT from OpenAI API. This Privacy Policy
        describes how we collect, use, and disclose information from users of
        the Extension.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We may collect the following types of information from users of the
        Extension:
      </p>
      <ul>
        <li>
          <strong>Email address:</strong> We collect users' email address to
          verify their license.
        </li>
        <li>
          <strong>OpenAI API key:</strong> We collect users' OpenAI API key to
          authenticate on OpenAI API requests.
        </li>
        <li>
          <strong>User input:</strong> We collect users' input to get processed
          data response by GPT from OpenAI API.
        </li>
      </ul>
      <p>
        <strong>
          We do not store any of the above information on our own servers.
        </strong>
      </p>

      <h2>2. Use of Information</h2>
      <p>We use the information we collect from users to:</p>
      <ul>
        <li>Verify the license of the Extension user</li>
        <li>Authenticate on OpenAI API requests</li>
        <li>Get processed data response by GPT from OpenAI API</li>
      </ul>
      <p>We do not use the information for any other purposes.</p>

      <h2>3. Disclosure of Information</h2>
      <p>
        We do not disclose any of the information we collect to any third
        parties.
      </p>

      <h2>4. Security</h2>
      <p>
        We take reasonable measures to protect the information we collect from
        users of the Extension. However, please be aware that no security
        measures are perfect or impenetrable, and we cannot guarantee the
        security of your information.
      </p>

      <h2>5. Changes to this Privacy Policy</h2>
      <p>
        We may change this Privacy Policy from time to time. If we make changes,
        we will notify you by revising the date at the top of the policy and, in
        some cases, we may provide you with additional notice (such as by adding
        a statement to our website or by sending you a notification). We
        encourage you to review the Privacy Policy whenever you use the
        Extension to stay informed about our information practices and the ways
        you can help protect your privacy.
      </p>

      <h2>6. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy or our
        practices with regard to the Extension, please contact us at{" "}
        <a href="mailto:contact@junaidgandhi.com">contact@junaidgandhi.com</a>.
      </p>
    </PolicyLayout>
  );
}
