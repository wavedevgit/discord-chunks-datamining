/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
function t(e) {
  let t = ["abs", "acos", "ambient", "area", "asin", "atan", "atmosphere", "attribute", "calculatenormal", "ceil", "cellnoise", "clamp", "comp", "concat", "cos", "degrees", "depth", "Deriv", "diffuse", "distance", "Du", "Dv", "environment", "exp", "faceforward", "filterstep", "floor", "format", "fresnel", "incident", "length", "lightsource", "log", "match", "max", "min", "mod", "noise", "normalize", "ntransform", "opposite", "option", "phong", "pnoise", "pow", "printf", "ptlined", "radians", "random", "reflect", "refract", "renderinfo", "round", "setcomp", "setxcomp", "setycomp", "setzcomp", "shadow", "sign", "sin", "smoothstep", "specular", "specularbrdf", "spline", "sqrt", "step", "tan", "texture", "textureinfo", "trace", "transform", "vtransform", "xcomp", "ycomp", "zcomp"],
    n = ["matrix", "float", "color", "point", "normal", "vector"],
    r = ["while", "for", "if", "do", "return", "else", "break", "extern", "continue"],
    i = {
      match: [/(surface|displacement|light|volume|imager)/, /\s+/, e.IDENT_RE],
      scope: {
        1: "keyword",
        3: "title.class"
      }
    };
  return {
    name: "RenderMan RSL",
    keywords: {
      keyword: r,
      built_in: t,
      type: n
    },
    illegal: "</",
    contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, e.C_NUMBER_MODE, {
      className: "meta",
      begin: "#",
      end: "$"
    }, i, {
      beginKeywords: "illuminate illuminance gather",
      end: "\\("
    }]
  }
}
e.exports = t