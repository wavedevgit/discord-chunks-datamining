/** Chunk was on 21968 **/
/** chunk id: 517765, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk179771 = require("./179771.js"),
  Chunk311907 = require("./311907.js"),
  Chunk342494 = require("./342494.js"),
  Chunk397927 = require("./397927.js"),
  Chunk58149 = require("./58149.js"),
  Chunk264322 = require("./264322.js"),
  Chunk607940 = require("./607940.js"),
  Chunk427157 = require("./427157.js"),
  Chunk954571 = require("./954571.js"),
  Chunk447066 = require("./447066.jsx"),
  Chunk320426 = require("./320426.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk979773 = require("./979773.js");

function y(e) {
  var t, n, l;
  let {
    name: y,
    icon: A,
    imageSrc: v,
    iconBackgroundColor: _,
    iconClassName: N,
    iconWrapperClassName: w,
    details: T,
    integration: E,
    buttonText: C,
    buttonDisabled: S,
    hasNextSection: I,
    onButtonClick: P,
    guildId: k,
    isScrolling: R,
    canShowMigrationTooltip: L,
    trailing: D
  } = e, [M, G] = r.useState(false), U = L && !R && !M && true !== k && null != E, B = r.useRef(null), W = r.useRef(null), H = null == C || null == P ? null : I ? (0, i.jsxs)(d.BJc, {
    direction: "horizontal",
    fullWidth: false,
    align: "center",
    ref: W,
    children: [(0, i.jsx)(d.Text, {
      variant: "text-sm/normal",
      children: C
    }), I ? (0, i.jsx)(d._BQ, {
      size: "custom",
      color: "currentColor",
      width: 10,
      height: 10,
      className: O.OW
    }) : null]
  }) : (0, i.jsx)(d.Button, {
    size: "sm",
    buttonRef: B,
    disabled: S,
    onClick: P,
    text: C
  });
  r.useEffect(() => {
    var e, t;
    U && b.default.track(x.HAw.COMMANDS_MIGRATION_TOOLTIP_VIEWED, (e = function(e) {
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
    }({}, (0, u.H$)(k)), t = t = {
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
  let V = U && (null != W.current || null != B.current) ? (0, i.jsx)(c.AM, {
      targetElementRef: I ? W : B,
      title: j.intl.string(j.t.ufFDiC),
      body: j.intl.string(j.t.TyMJwC),
      onRequestClose: () => {
        G(true), h.A.dismissOverviewTooltip(k, E.integration)
      },
      position: "bottom",
      align: "center",
      caretConfig: {
        align: "center"
      }
    }) : null,
    z = (0, o.yK)([m.A], () => {
      var e;
      return null != E && null != k && null != (e = m.A.getApplicationEntitlementsForGuild(E.application.id, k)) ? e : []
    }),
    K = (0, p.ON)(k, true),
    F = (null == E ? true : E.application) != null && Object.keys(null != (t = null == (l = K.result) || null == (n = l.sections[E.application.id]) ? true : n.commands) ? t : {}).length > 0,
    Y = (0, i.jsxs)(d.BJc, {
      direction: "horizontal",
      align: "center",
      children: [(0, i.jsx)(f.A, {
        name: y,
        icon: A,
        imageSrc: v,
        iconBackgroundColor: _,
        iconClassName: N,
        iconWrapperClassName: w,
        details: T,
        isPremium: z.length > 0,
        children: function(e, t) {
          var n, r;
          if (null == e) return null;
          let l = [],
            {
              application: a,
              integration: o,
              webhooks: c
            } = e;
          return null != a.bot && (null == o || null == (n = o.scopes) ? true : n.includes(s.F.BOT)) && l.push({
            id: "bot",
            label: new g.A(a.bot).isVerifiedBot() ? j.intl.string(j.t.xxcTGy) : j.intl.string(j.t.AOdOYr),
            icon: d.CnV
          }), c.length > 0 && l.push({
            id: "webhooks",
            label: j.intl.formatToPlainString(j.t["6HqDfT"], {
              count: c.length
            }),
            icon: d.XC7
          }), (null == o || null == (r = o.scopes) ? true : r.includes(s.F.APPLICATIONS_COMMANDS)) === true && t && l.push({
            id: "commands",
            label: j.intl.string(j.t["0hKkS+"]),
            icon: d.kC9
          }), (0, i.jsx)(d.BJc, {
            direction: "horizontal",
            gap: 4,
            children: (0, i.jsx)(d.CR_, {
              label: j.intl.string(j.t.G8u3Jf),
              layout: "inline",
              items: l
            })
          })
        }(E, F)
      }), V, H, D]
    });
  return I ? (0, i.jsx)(d.DUT, {
    onClick: () => {
      L && null != k && null != E && h.A.dismissOverviewTooltip(k, E.integration), null == P || P()
    },
    children: (0, i.jsx)(d.ZpM, {
      editable: true,
      className: a()(O.Nr, O.vk),
      children: Y
    })
  }) : (0, i.jsx)(d.ZpM, {
    editable: true,
    className: O.Nr,
    children: Y
  })
}