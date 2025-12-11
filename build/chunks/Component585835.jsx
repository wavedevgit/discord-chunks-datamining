/** Chunk was on 9414 **/
/** chunk id: 585835, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk243814 = require("./243814.js"),
  Chunk442837 = require("./442837.js"),
  Chunk907862 = require("./907862.js"),
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
  Chunk384515 = require("./384515.js");

function O(e) {
  var t, n, l;
  let {
    name: O,
    icon: y,
    imageSrc: C,
    iconBackgroundColor: N,
    iconClassName: S,
    iconWrapperClassName: I,
    details: w,
    integration: E,
    buttonText: P,
    buttonDisabled: T,
    hasNextSection: Z,
    onButtonClick: _,
    guildId: k,
    isScrolling: A,
    canShowMigrationTooltip: D,
    trailing: R
  } = e, [L, M] = r.useState(false), U = D && !A && !L && true !== k && null != E, B = r.useRef(null), W = r.useRef(null), H = null == P || null == _ ? null : Z ? (0, i.jsxs)(d.Kqy, {
    direction: "horizontal",
    fullWidth: false,
    align: "center",
    ref: W,
    children: [(0, i.jsx)(d.Text, {
      variant: "text-sm/normal",
      children: P
    }), Z ? (0, i.jsx)(d.Fbu, {
      size: "custom",
      color: "currentColor",
      width: 10,
      height: 10,
      className: v.caret
    }) : null]
  }) : (0, i.jsx)(d.Button, {
    size: "sm",
    buttonRef: B,
    disabled: T,
    onClick: _,
    text: P
  });
  r.useEffect(() => {
    var e, t;
    U && f.default.track(x.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, (e = function(e) {
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
    }({}, (0, u.hH)(k)), t = t = {
      application_id: null == E ? true : E.application.id,
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
  }, [k, null == E ? true : E.application.id, U]);
  let G = U && (null != W.current || null != B.current) ? (0, i.jsx)(c.J2, {
      targetElementRef: Z ? W : B,
      title: j.intl.string(j.t.ufFDiC),
      body: j.intl.string(j.t.TyMJwC),
      onRequestClose: () => {
        M(true), h.Z.dismissOverviewTooltip(k, E.integration)
      },
      position: "bottom",
      align: "center",
      caretConfig: {
        align: "center"
      }
    }) : null,
    F = (0, s.Wu)([p.Z], () => {
      var e;
      return null != E && null != k && null != (e = p.Z.getApplicationEntitlementsForGuild(E.application.id, k)) ? e : []
    }),
    K = (0, b.LD)(k, true),
    z = (null == E ? true : E.application) != null && Object.keys(null != (l = null == (n = K.result) || null == (t = n.sections[E.application.id]) ? true : t.commands) ? l : {}).length > 0,
    V = (0, i.jsxs)(d.Kqy, {
      direction: "horizontal",
      align: "center",
      children: [(0, i.jsx)(g.Z, {
        name: O,
        icon: y,
        imageSrc: C,
        iconBackgroundColor: N,
        iconClassName: S,
        iconWrapperClassName: I,
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
            label: new m.Z(a.bot).isVerifiedBot() ? j.intl.string(j.t.xxcTGy) : j.intl.string(j.t.AOdOYr),
            icon: d.wGt
          }), c.length > 0 && l.push({
            id: "webhooks",
            label: j.intl.formatToPlainString(j.t["6HqDfT"], {
              count: c.length
            }),
            icon: d.tYf
          }), (null == s || null == (r = s.scopes) ? true : r.includes(o.x.APPLICATIONS_COMMANDS)) === true && t && l.push({
            id: "commands",
            label: j.intl.string(j.t["0hKkS+"]),
            icon: d.SsZ
          }), (0, i.jsx)(d.Kqy, {
            direction: "horizontal",
            gap: 4,
            children: (0, i.jsx)(d.QSK, {
              label: j.intl.string(j.t.G8u3Jf),
              layout: "inline",
              items: l
            })
          })
        }(E, z)
      }), G, H, R]
    });
  return Z ? (0, i.jsx)(d.P3F, {
    onClick: () => {
      D && null != k && null != E && h.Z.dismissOverviewTooltip(k, E.integration), null == _ || _()
    },
    children: (0, i.jsx)(d.Zbd, {
      editable: true,
      className: a()(v.card, v.clickable),
      children: V
    })
  }) : (0, i.jsx)(d.Zbd, {
    editable: true,
    className: v.card,
    children: V
  })
}