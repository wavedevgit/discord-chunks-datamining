/** Chunk was on 69283 **/
/** chunk id: 930826, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./583741.js"), require("./290780.js"), require("./642613.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk905131 = require("./905131.jsx"),
  Chunk437800 = require("./437800.js");

function l(e) {
  let {
    memberIds: t,
    guildId: n,
    pickedMemberIds: l,
    currentMemberId: o
  } = e, c = t.filter(e => !l.includes(e)), u = t.filter(e => l.includes(e) && e !== o).reverse();
  null != o && c.unshift(o), c.sort((e, t) => e === o ? false : +(t === o));
  let s = t.length > 5;
  return (0, r.jsxs)("div", {
    className: i.listContainer,
    children: [c.length > 0 && (0, r.jsxs)("div", {
      className: i.section,
      children: [(0, r.jsxs)("h3", {
        className: i.sectionTitle,
        children: ["Available (", c.length, ")"]
      }), (0, r.jsx)("ul", {
        className: i.memberList,
        "data-two-columns": s || true,
        children: c.map(e => (0, r.jsx)(a.Z, {
          userId: e,
          guildId: n,
          isPicked: false,
          isCurrent: o === e
        }, e))
      })]
    }), u.length > 0 && (0, r.jsxs)("div", {
      className: i.section,
      children: [(0, r.jsxs)("h3", {
        className: i.sectionTitle,
        children: ["Selected (", u.length, ")"]
      }), (0, r.jsx)("ul", {
        className: i.memberList,
        "data-two-columns": s || true,
        children: u.map(e => (0, r.jsx)(a.Z, {
          userId: e,
          guildId: n,
          isPicked: true,
          isCurrent: false
        }, e))
      })]
    })]
  })
}