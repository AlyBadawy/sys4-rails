import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { PrivacyPolicy } from '../legalPages/PrivacyPolicy';
import { s4render } from '../../jest/testUtils';
import { TermsOfUse } from '../legalPages/TermsOfUse';
import { CookieConsent } from '../legalPages/CookieConsent';
import { CookiesPolicy } from '../legalPages/CookiesPolicy';

describe('Legal Pages', () => {
  describe('Privacy Policy Page', () => {
    it('Renders the privacy policy page', () => {
      s4render(<PrivacyPolicy />);
      const paragraph = screen.getByText(
        /This Privacy Policy explains how we collect, use, and disclose your personal information when you use our application./
      );
      expect(paragraph).toBeInTheDocument();
    });
    it('Renders the privacy policy page with all the sections', () => {
      s4render(<PrivacyPolicy />);

      expect(screen.getByText(/Information We Collect/)).toBeInTheDocument();
      expect(
        screen.getByText(/How We Use Your Information/)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/How We Share Your Information/)
      ).toBeInTheDocument();
      expect(screen.getByText(/Your Choices/)).toBeInTheDocument();
      expect(
        screen.getByText(/Changes to this Privacy Policy/)
      ).toBeInTheDocument();
    });
  });

  describe('Terms of Use Page', () => {
    it('Renders the terms of use page', () => {
      s4render(<TermsOfUse />);
      const paragraph = screen.getByText(
        /you agree to these Terms of Use, which constitute a binding agreement between you and SYS4. If you do not agree to these Terms of Use, do not use/i
      );
      expect(paragraph).toBeInTheDocument();
    });

    it('Renders the terms of use page with all the sections', () => {
      s4render(<TermsOfUse />);

      expect(screen.getByText(/Use of Application/)).toBeInTheDocument();
      expect(screen.getByText(/Intellectual Property/)).toBeInTheDocument();
      expect(screen.getByText(/Disclaimer of Warranties/)).toBeInTheDocument();
      expect(screen.getByText(/Limitation of Liability/)).toBeInTheDocument();
      expect(
        screen.getByText(/Modification of Terms of Use/)
      ).toBeInTheDocument();
      expect(screen.getByText(/Governing Law/)).toBeInTheDocument();
    });
  });

  describe('Cookies Policy Page', () => {
    it('Renders the terms of use page', () => {
      s4render(<CookiesPolicy />);
      const paragraph = screen.getByText(
        /By using the Service, you consent to the use of cookies./i
      );
      expect(paragraph).toBeInTheDocument();
    });

    it('Renders cookies policy page with all the sections', () => {
      s4render(<CookiesPolicy />);

      expect(
        screen.getByText(/To enable certain functions of the Service/)
      ).toBeInTheDocument();
      expect(screen.getByText(/To provide analytics/)).toBeInTheDocument();
      expect(screen.getByText(/To store your preferences/)).toBeInTheDocument();
      expect(
        screen.getByText(/What are your choices regarding cookies?/)
      ).toBeInTheDocument();
    });
  });

  describe('CookieConsent', () => {
    it('renders correctly with the paragraph', () => {
      s4render(<CookieConsent />);
      expect(
        screen.getByText(
          /This site uses services that use cookies to deliver better experience and analyze traffic./
        )
      ).toBeInTheDocument();
    });

    it('sets a cookie when accepted', () => {
      s4render(<CookieConsent />);
      expect(screen.getByText('Got it')).toBeInTheDocument();
      screen.getByText('Got it').click();
      expect(document.cookie).toMatch(/_sys4_cookies_accepted=accepted/);
    });
  });
});
