/** Chunk was on 99133 **/
/** chunk id: 742409, original params: A,t,e (module,exports,require) **/
require.d(exports, {
  Z: () => s,
  l: () => w
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  v = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk957537 = require("./957537.js"),
  Chunk737770 = require("./737770.js"),
  Chunk839008 = require("./839008.js"),
  Chunk685184 = require("./685184.js"),
  Chunk369509 = require("./369509.jsx"),
  Chunk195196 = require("./195196.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk668271 = require("./668271.js");

function w(A) {
  return <div className={v()(a.messageContainer, A.className)}>{<div className={a.avatarContainer}>{"string" == typeof A.avatar ? (0, r.jsx)("img", {
        className: a.avatar,
        src: A.avatar,
        alt: "".concat(A.username, " avatar"),
        width: 40,
        height: 40
      }) : A.avatar}</div>}{<div className={a.contentContainer}>{<div className={a.usernameContainer}>{"string" == typeof A.username ? <n.Text data-text={A.username} className={A.usernameClassName} variant={"text-md/semibold"} style={A.usernameStyle}>{A.username}</n.Text> : A.username}{true !== A.decorations && <div className={a.decorationsContainer}>{A.decorations}</div>}</div>}{null != A.message && <n.Text variant={"text-md/medium"}>{A.message}</n.Text>}{A.asset}</div>}</div>
}
let s = function(A) {
  var {
    className: t
  } = A, e = function(A, t) {
    if (null == A) return {};
    var e, r, g = function(A, t) {
      if (null == A) return {};
      var e, r, g = {},
        v = Object.keys(A);
      for (r = 0; r < v.length; r++) e = v[r], t.indexOf(e) >= 0 || (g[e] = A[e]);
      return g
    }(A, t);
    if (Object.getOwnPropertySymbols) {
      var v = Object.getOwnPropertySymbols(A);
      for (r = 0; r < v.length; r++) e = v[r], !(t.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(A, e) && (g[e] = A[e])
    }
    return g
  }(A, ["className"]);
  return <div className={v()(a.container, t)}>{<w className={a.unfocusedMessage} avatar={f.Z} username={"Roka"} usernameStyle={{
        color: "var(--brand-400)"
      }} message={C.intl.string(o.default.bpghV1)} />}{<w className={a.unfocusedMessage} avatar={B.Z} username={"hongo"} usernameStyle={{
        color: "var(--green-230)"
      }} message={C.intl.string(o.default["rnpv7+"])} />}{<w avatar={h.Z} username={"Lily"} usernameStyle={{
        color: "var(--orange-300)"
      }} message={C.intl.string(o.default.u7tjsr)} decorations={(0, r.jsx)(i.S, function(A) {
        for (var t = 1; t < arguments.length; t++) {
          var e = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(e);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter(function(A) {
            return Object.getOwnPropertyDescriptor(e, A).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = e[t], t in A ? Object.defineProperty(A, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : A[t] = r
          })
        }
        return A
      }({}, e))} />}{<w className={a.unfocusedMessage} avatar={l.Z} username={"sharon"} usernameStyle={{
        color: "var(--brand-400)"
      }} message={C.intl.string(o.default.GlWVJC)} />}{<w className={a.unfocusedMessage} avatar={h.Z} username={"Lily"} usernameStyle={{
        color: "var(--orange-300)"
      }} message={C.intl.string(o.default.AIp9ho)} />}</div>
}