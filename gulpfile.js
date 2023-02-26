// const {series, parallel, src, dest, watch} = require("gulp");

// function holaMundo(cb) {
//   console.log("Hola mundo");
//   cb();
// }

// function adiosMundo(cb) {
//     console.log("Adios mundo");
//     cb();
// }

// // #############

// function pipeline() {
//     return src("css/*.css").pipe(dest("up/css"));
// }

// function vigila(cb) {
//     watch("css/*.css", holaMundo);
//     cb();
// }

// exports.holaMundo = holaMundo;
// exports.adiosMundo = adiosMundo;
// exports.default = holaMundo;
// exports.pipeline = pipeline;
// exports.vigila = vigila;
// exports.serie = series(adiosMundo, holaMundo);
// exports.paralelo = parallel(adiosMundo, holaMundo);

// #####################
// const rename=require("gulp-rename");
// const sassdoc = require("sassdoc");
// const processhtml = require("gulp-processhtml");

// function compilar() {
//     return src("scss/main.scss").pipe(sass()).pipe(dest("up/css"));
// }

// var doc_options = {
//     dest: "docs"
// }

// function generar_docs() {
//     return src("scss/main.scss").pipe(sassdoc(doc_options));
// }

// function html() {
//     return src("*html").pepe(processhtml()).pipe(dest("up"));
// }



// #####################



// GULPFILE.JS
// gulp -> tarea por defecto
// gulp --tasks -> lista las tareas
// gulp holamundo -> ejecuta la tarea holamundo

// npm install gulp --save-dev (plugin) -> instala el plugin gulp en el proyecto


// require("gulp");
// Se pueden ejecutar tareas tanto en serie como en paralelo

const sassdoc= require('sassdoc');
const { parallel, src, dest, watch} = require('gulp');

var doc_options = {
    dest: "docs",
};

function generate_docs(){
    return src("scss/styles.scss")
        .pipe(sassdoc(doc_options))
}

function pipeline() {
    return src('css/*.css').pipe(dest('proyecto/css'));
}

function watchChanges(cb){
    watch('css/*.css', holamundo);
    cb();
}


exports.pipeline = pipeline;
exports.watchChanges = watchChanges;
exports.generate_docs = generate_docs;

