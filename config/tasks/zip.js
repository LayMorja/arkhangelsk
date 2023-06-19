import { deleteAsync } from 'del';
import GulpZip from 'gulp-zip';

export function zip() {
	deleteAsync(`${app.path.rootFolder}/*.zip`);
	return app.gulp
		.src([`${app.path.buildFolder}/**/*.*`, `!${app.path.build.js}/*.txt`])
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: 'ZIP',
					message: 'Error: <%= error.message %>',
				})
			)
		)
		.pipe(GulpZip(`${app.path.rootFolder}.zip`))
		.pipe(app.gulp.dest('./'));
}
