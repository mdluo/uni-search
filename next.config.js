module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: [
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'images.unsplash.com',
      'www.google.com',
      'avatar.tobi.sh',
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
