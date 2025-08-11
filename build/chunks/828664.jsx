/** Chunk was on 58641 **/
/** chunk id: 828664, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk774078 = require("./774078.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk602667 = require("./602667.jsx"),
  Chunk388032 = require("./388032.jsx");

function O(t) {
  let {
    transitionState: e,
    onClose: r,
    questEnrollmentBlockedUntil: o
  } = t, {
    hours: s,
    minutes: a,
    seconds: u
  } = (0, l.Z)(o), O = String(s).padStart(2, "0"), b = String(a).padStart(2, "0"), f = String(u).padStart(2, "0"), d = "".concat(O, ":").concat(b, ":").concat(f);
  return <i.Modal size={"sm"} transitionState={e} onClose={r} title={p.intl.string(p.t["g+02d3"])} actions={[{
      variant: "secondary",
      onClick: () => r(),
      text: p.intl.string(p.t.cpT0Cg)
    }]}><n.Fragment>{<c.Text variant={"text-md/normal"}>{p.intl.string(p.t.XEHDT0)}</c.Text>}{<c.Text variant={"text-md/normal"}>{p.intl.formatToPlainString(p.t["+5XVHx"], {
          countdownString: d
        })}</c.Text>}</n.Fragment></i.Modal>
}

function b(t) {
  var {
    onClose: e,
    quest: r,
    sourceQuestContent: i
  } = t, c = function(t, e) {
    if (null == t) return {};
    var r, n, o = function(t, e) {
      if (null == t) return {};
      var r, n, o = {},
        i = Object.keys(t);
      for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
      return o
    }(t, e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);
      for (n = 0; n < i.length; n++) r = i[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
    }
    return o
  }(t, ["onClose", "quest", "sourceQuestContent"]);
  let l = (0, o.e7)([s.Z], () => s.Z.questEnrollmentBlockedUntil);
  return null == l || null == r ? null : <u.A overrideVisibility={true} questOrQuests={r} questContent={a.jn.QUEST_ENROLLMENT_BLOCKED_MODAL} sourceQuestContent={i}>{() => {
      var t, r;
      return (0, n.jsx)(O, (t = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
            return Object.getOwnPropertyDescriptor(r, t).enumerable
          }))), n.forEach(function(e) {
            var n;
            n = r[e], e in t ? Object.defineProperty(t, e, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = n
          })
        }
        return t
      }({}, c), r = r = {
        onClose: e,
        questEnrollmentBlockedUntil: l
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          r.push.apply(r, n)
        }
        return r
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
      }), t))
    }}</u.A>
}