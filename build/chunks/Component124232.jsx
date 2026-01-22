/** Chunk was on 81169 **/
/** chunk id: 124232, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk496431 = require("./496431.js"),
  Chunk859703 = require("./859703.js"),
  Chunk341915 = require("./341915.js"),
  Chunk73473 = require("./73473.js"),
  Chunk985018 = require("./985018.jsx");

function O(t) {
  let {
    transitionState: e,
    onClose: r,
    questEnrollmentBlockedUntil: l
  } = t, {
    hours: s,
    minutes: a,
    seconds: u
  } = (0, i.A)(l), O = String(s).padStart(2, "0"), b = String(a).padStart(2, "0"), f = String(u).padStart(2, "0"), y = "".concat(O, ":").concat(b, ":").concat(f);
  return (0, n.jsx)(o.Modal, {
    size: "sm",
    transitionState: e,
    onClose: r,
    title: p.intl.string(p.t["g+02d5"]),
    actions: [{
      variant: "secondary",
      onClick: () => r(),
      text: p.intl.string(p.t.cpT0Cq)
    }],
    children: (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(c.Text, {
        variant: "text-md/normal",
        children: p.intl.string(p.t["XEHDT/"])
      }), (0, n.jsx)(c.Text, {
        variant: "text-md/normal",
        children: p.intl.formatToPlainString(p.t["+5XVH+"], {
          countdownString: y
        })
      })]
    })
  })
}

function b(t) {
  let {
    onClose: e,
    quest: r,
    sourceQuestContent: o
  } = t, c = function(t, e) {
    if (null == t) return {};
    var r, n, o, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, r = Reflect.ownKeys(t); o < r.length; o++) n = r[o], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (l[n] = t[n]);
      return l
    }
    if (l = function(t, e) {
        if (null == t) return {};
        var r, n, o = {},
          l = Object.getOwnPropertyNames(t);
        for (n = 0; n < l.length; n++) r = l[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]);
        return o
      }(t, e), Object.getOwnPropertySymbols)
      for (o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++) n = r[o], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (l[n] = t[n]);
    return l
  }(t, ["onClose", "quest", "sourceQuestContent"]), i = (0, l.bG)([s.A], () => s.A.questEnrollmentBlockedUntil);
  return null == i || null == r ? null : (0, n.jsx)(u.R, {
    overrideVisibility: true,
    questOrQuests: r,
    questContent: a.uF.QUEST_ENROLLMENT_BLOCKED_MODAL,
    sourceQuestContent: o,
    children: () => {
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
        questEnrollmentBlockedUntil: i
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
    }
  })
}