/** Chunk was on 47463 **/
/** chunk id: 585835, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk243814 = require("./243814.js"),
  Chunk442837 = require("./442837.js"),
  Chunk907862 = require("./907862.js"),
  Chunk753450 = require("./753450.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk213459 = require("./213459.js"),
  Chunk488915 = require("./488915.js"),
  Chunk598077 = require("./598077.js"),
  Chunk626135 = require("./626135.js"),
  Chunk486199 = require("./486199.jsx"),
  Chunk929507 = require("./929507.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk473059 = require("./473059.js");

function O(e) {
  var t, n, l;
  let {
    name: O,
    icon: _,
    imageSrc: C,
    iconBackgroundColor: N,
    iconClassName: S,
    iconWrapperClassName: Z,
    details: w,
    integration: I,
    buttonText: P,
    buttonDisabled: T,
    hasNextSection: E,
    onButtonClick: k,
    guildId: A,
    isScrolling: D,
    canShowMigrationTooltip: R,
    trailing: L
  } = e, [M, B] = r.useState(false), U = R && !D && !M && true !== A && null != I, W = r.useRef(null), H = r.useRef(null), G = null == P || null == k ? null : E ? (0, i.jsxs)(u.Kqy, {
    direction: "horizontal",
    fullWidth: false,
    align: "center",
    ref: H,
    children: [(0, i.jsx)(u.Text, {
      variant: "text-sm/normal",
      children: P
    }), E ? (0, i.jsx)(u.Fbu, {
      size: "custom",
      color: "currentColor",
      width: 10,
      height: 10,
      className: y.caret
    }) : null]
  }) : (0, i.jsx)(u.zxk, {
    size: "sm",
    buttonRef: W,
    disabled: T,
    onClick: k,
    text: P
  });
  r.useEffect(() => {
    var e, t;
    U && f.default.track(j.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, (e = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          var i;
          i = n[t], t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = i
        })
      }
      return e
    }({}, (0, p.hH)(A)), t = t = {
      application_id: null == I ? true : I.application.id,
      location: "overview"
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e))
  }, [A, null == I ? true : I.application.id, U]);
  let z = U && (null != H.current || null != W.current) ? (0, i.jsx)(c.J2, {
      targetElementRef: E ? H : W,
      title: v.intl.string(v.t.ufFDiI),
      body: v.intl.string(v.t.TyMJwM),
      onRequestClose: () => {
        B(true), x.Z.dismissOverviewTooltip(A, I.integration)
      },
      position: "bottom",
      align: "center",
      caretConfig: {
        position: "top",
        align: "center"
      }
    }) : null,
    F = (0, s.Wu)([b.Z], () => {
      var e;
      return null != I && null != A && null != (e = b.Z.getApplicationEntitlementsForGuild(I.application.id, A)) ? e : []
    }),
    K = (0, m.LD)(A, true),
    q = (null == I ? true : I.application) != null && Object.keys(null != (l = null == (n = K.result) || null == (t = n.sections[I.application.id]) ? true : t.commands) ? l : {}).length > 0,
    V = (0, i.jsxs)(u.Kqy, {
      direction: "horizontal",
      align: "center",
      children: [(0, i.jsx)(h.Z, {
        name: O,
        icon: _,
        imageSrc: C,
        iconBackgroundColor: N,
        iconClassName: S,
        iconWrapperClassName: Z,
        details: w,
        isPremium: F.length > 0,
        children: function(e, t) {
          var n, r;
          if (null == e) return null;
          let l = [],
            {
              application: a,
              integration: s,
              webhooks: c
            } = e;
          return null != a.bot && (null == s || null == (n = s.scopes) ? true : n.includes(o.x.BOT)) && l.push({
            id: "bot",
            label: new g.Z(a.bot).isVerifiedBot() ? v.intl.string(v.t.xxcTGx) : v.intl.string(v.t.AOdOYm),
            icon: u.wGt
          }), c.length > 0 && l.push({
            id: "webhooks",
            label: v.intl.formatToPlainString(v.t["6HqDfX"], {
              count: c.length
            }),
            icon: u.tYf
          }), (null == s || null == (r = s.scopes) ? true : r.includes(o.x.APPLICATIONS_COMMANDS)) === true && t && l.push({
            id: "commands",
            label: v.intl.string(v.t["0hKkS0"]),
            icon: u.SsZ
          }), (0, i.jsx)(u.Kqy, {
            direction: "horizontal",
            gap: 4,
            children: (0, i.jsx)(d.Q, {
              label: v.intl.string(v.t.G8u3JS),
              layout: "inline",
              items: l
            })
          })
        }(I, q)
      }), z, G, L]
    });
  return E ? (0, i.jsx)(u.P3F, {
    onClick: () => {
      R && null != A && null != I && x.Z.dismissOverviewTooltip(A, I.integration), null == k || k()
    },
    children: (0, i.jsx)(u.Zbd, {
      editable: true,
      className: a()(y.card, y.clickable),
      children: V
    })
  }) : (0, i.jsx)(u.Zbd, {
    editable: true,
    className: y.card,
    children: V
  })
}