module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
        },
        dist: {
            files: {
                'public/css/app,css': 'sass/app.css'
            }
        }
    }
    });
  
    grunt.registerTask('default', ['sass']);
  };