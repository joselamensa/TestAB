export const config = {
    runtime: 'edge', // ¡Clave para usar Edge Functions!
  };
  
  export default async function handler(request) {
  const urlA = 'https://retiro.jackgarzonr.com/jun2-a';
  const urlB = 'https://retiro.jackgarzonr.com/jun2-b';
  
  
    // Determinación aleatoria
    const variant = Math.random() < 0.5 ? 'A' : 'B';
    const redirectUrl = variant === 'A' ? urlA : urlB;
  
    // Set cookie para tracking
    const response = new Response(null, {
      status: 302,
      headers: {
        Location: redirectUrl,
        'Set-Cookie': `ab_variant=${variant}; Path=/; Max-Age=86400`,
      },
    });
  
    return response;
  }
  