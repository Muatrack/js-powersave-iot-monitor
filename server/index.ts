export default {
	async fetch(request, env) {
    const { pathname } = new URL(request.url);

    if (pathname === "/api/db") {
      // If you did not use `DB` as your binding name, change it here
      const { results } = await env.DB.prepare(
        "SELECT * FROM user_list"
      )
	  .all();
    	// .bind("*")
        
      return new Response(JSON.stringify(results), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

	const url = new URL(request.url);
	if (url.pathname.startsWith("/api/name")) {
		return Response.json({
			name: "Cloudflare",
		});
	}
	return new Response(null, { status: 404 });
  }
} satisfies ExportedHandler<Env>;
