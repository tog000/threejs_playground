THREE.ColorShiftShader = {

	uniforms: {
		"tDiffuse": { type: "t", value: null },
		"delta": {type: 'f', value: 1.0}
	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join("\n"),

	fragmentShader: [

		"uniform sampler2D tDiffuse;",
		"uniform int side;",
		"uniform float delta;",
		"varying vec2 vUv;",

		"void main() {",

			"vec2 p = vUv;",
			"vec4 color;",
			"p.x -= 0.005*sin(delta);",
			"vec4 color1 = texture2D(tDiffuse, p);",
			"p.y += 0.01*cos(delta);",
			"vec4 color2 = texture2D(tDiffuse, p);",
			"color = vec4(color1.r,color1.g,color2.b, 1.0);",
			//"color[1] = 0.5;",
			"gl_FragColor = color;",

		"}"

	].join("\n")

};