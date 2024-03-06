module.exports = defineTest({
	solo: true,
	description: 'properly tracks mutations when moduleSideEffects are disabled (#5408)',
	options: {
		treeshake: {
			moduleSideEffects: false
		}
	}
});
