import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ng.wellshome.app',
  appName: 'Wells',
  webDir: 'www',
  // The app screens are bundled inside the APK (loaded from www/).
  // The app still talks to your live WordPress backend at wellshome.ng
  // for listings, accounts, messages and payments.
  server: {
    androidScheme: 'https',
    // Allow the bundled app to call your live API and payment providers.
    allowNavigation: [
      'wellshome.ng',
      '*.wellshome.ng',
      'api.paystack.co',
      'js.paystack.co',
      'checkout.flutterwave.com',
      '*.flutterwave.com'
    ]
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1500,
      backgroundColor: '#0C2340',
      showSpinner: false,
      androidScaleType: 'CENTER_CROP'
    }
  }
};

export default config;
