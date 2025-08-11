/** Chunk was on 25526 **/
/** chunk id: 262918, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk902704 = require("./902704.js"),
  Chunk481060 = require("./481060.js"),
  Chunk935369 = require("./935369.js"),
  Chunk367907 = require("./367907.js"),
  Chunk707515 = require("./707515.js"),
  Chunk528567 = require("./528567.js"),
  Chunk873128 = require("./873128.js"),
  Chunk647529 = require("./647529.js"),
  Chunk986398 = require("./986398.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk308102 = require("./308102.js");

function _(e) {
  var t, r, {
      guildId: a,
      leaderboardId: _
    } = e,
    j = function(e, t) {
      if (null == e) return {};
      var r, n, i = function(e, t) {
        if (null == e) return {};
        var r, n, i = {},
          a = Object.keys(e);
        for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
      }
      return i
    }(e, ["guildId", "leaderboardId"]);
  let w = (0, f.Z)({
    guildId: a,
    leaderboardId: _
  });
  o()(null != w, "Leaderboard must be loaded before opening the settings modal");
  let y = w.guild_settings,
    [v, O] = i.useState(y.sort_by_statistic_id),
    [C, I] = i.useState(y.sort_desc),
    [S, N] = i.useState(y.show_winner_crown),
    [L, {
      loading: Z
    }] = (0, d.Z)(u._);
  i.useEffect(() => {
    c.ZP.trackWithMetadata(m.rMx.OPEN_MODAL, {
      type: m.jXE.GUILD_LEADERBOARD_SETTINGS_MODAL
    })
  }, []);
  let P = v !== y.sort_by_statistic_id || C !== y.sort_desc || S !== y.show_winner_crown,
    k = async () => {
      await L({
        guildId: a,
        leaderboardId: _,
        sortByStatisticId: v,
        sortDesc: C,
        showWinnerCrown: S
      }), j.onClose()
    }, B = i.useMemo(() => {
      let e = Object.values(w.settings.statistics).filter(e => e.selectable_for_competition),
        t = [];
      for (let r of e)
        for (let e of [true, false]) t.push({
          value: {
            sortByStatisticId: r.id,
            sortDesc: e
          },
          label: (0, g.s)({
            statisticId: r.id,
            sortDesc: e,
            aggregationType: r.aggregation_type
          })
        });
      return t
    }, [w]), E = B.find(e => (0, s.Z)(e.value, {
      sortByStatisticId: v,
      sortDesc: C
    }));
  return <x.Z{...t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({}, j), r = r = {
    guildId: a,
    title: b.intl.string(b.t.rv9GUV),
    buttons: (0, n.jsx)(l.zxk, {
      variant: "primary",
      text: b.intl.string(b.t.R3BPHx),
      onClick: k,
      loading: Z,
      disabled: !P
    }),
    children: (0, n.jsxs)(l.hzk, {
      className: p.content,
      children: [(0, n.jsx)(l.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: b.intl.string(b.t.IQO9Fx)
      }), (0, n.jsx)(l.LZC, {
        size: 8
      }), (0, n.jsx)(l.q4e, {
        placeholder: b.intl.string(b.t["g/Rr2d"]),
        value: null == E ? true : E.value,
        options: B,
        onChange: e => {
          let {
            sortByStatisticId: t,
            sortDesc: r
          } = e;
          O(t), I(r)
        }
      }), (0, n.jsx)("div", {
        className: p.divider
      }), (0, n.jsx)(l.vwX, {
        children: b.intl.string(b.t.HU4EKC)
      }), (0, n.jsx)(l.LZC, {
        size: 8
      }), (0, n.jsx)(l.j7V, {
        hideBorder: true,
        onChange: () => N(e => !e),
        value: S,
        className: p.showWinnerCrownSwitch,
        children: (0, n.jsxs)("div", {
          className: p.showWinnerCrownTextContainer,
          children: [(0, n.jsx)(l.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: b.intl.string(b.t.cH7QEx)
          }), (0, n.jsx)(h.Z, {
            className: p.winnerImage,
            leaderboard: w
          })]
        })
      })]
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t} />
}