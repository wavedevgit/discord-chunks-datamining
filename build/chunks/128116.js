/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
function t(e) {
  let t = {
      className: "keyword",
      begin: "\\$(f[asn]|t|vp[rtd]|children)"
    },
    n = {
      className: "literal",
      begin: "false|true|PI|undef"
    },
    r = {
      className: "number",
      begin: "\\b\\d+(\\.\\d+)?(e-?\\d+)?",
      relevance: 0
    },
    i = e.inherit(e.QUOTE_STRING_MODE, {
      illegal: null
    }),
    o = {
      className: "meta",
      keywords: {
        keyword: "include use"
      },
      begin: "include|use <",
      end: ">"
    },
    a = {
      begin: "[*!#%]",
      relevance: 0
    },
    s = {
      className: "function",
      beginKeywords: "module function",
      end: /=|\{/,
      contains: [{
        className: "params",
        begin: "\\(",
        end: "\\)",
        contains: ["self", r, i, t, n]
      }, e.UNDERSCORE_TITLE_MODE]
    };
  return {
    name: "OpenSCAD",
    aliases: ["scad"],
    keywords: {
      keyword: "function module include use for intersection_for if else \\%",
      literal: "false true PI undef",
      built_in: "circle square polygon text sphere cube cylinder polyhedron translate rotate scale resize mirror multmatrix color offset hull minkowski union difference intersection abs sign sin cos tan acos asin atan atan2 floor round ceil ln log pow sqrt exp rands min max concat lookup str chr search version version_num norm cross parent_module echo import import_dxf dxf_linear_extrude linear_extrude rotate_extrude surface projection render children dxf_cross dxf_dim let assign"
    },
    contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, r, o, i, t, a, s]
  }
}
e.exports = t