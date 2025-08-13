/** Chunk was on 60458 **/
/** chunk id: 247031, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./388685.js"), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./539854.js"), require("./642613.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk749210 = require("./749210.js"),
  Chunk493544 = require("./493544.jsx"),
  Chunk479531 = require("./479531.js"),
  Chunk210887 = require("./210887.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk251625 = require("./251625.js"),
  Chunk226951 = require("./226951.js"),
  Chunk51144 = require("./51144.js"),
  Chunk434404 = require("./434404.js"),
  Chunk372454 = require("./372454.js"),
  Chunk999382 = require("./999382.js"),
  Chunk84613 = require("./84613.js"),
  Chunk740903 = require("./740903.js"),
  Chunk1080 = require("./1080.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk93210 = require("./93210.js"),
  Chunk423279 = require("./423279.js");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      P(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Z(e) {
  let {
    transitionState: t,
    guild: n,
    user: l,
    ban: a,
    hideDiscriminator: s,
    onClose: o
  } = e, [d, m] = i.useState(false), [p, h] = i.useState(null);
  async function f() {
    if (null != n) {
      h(null), m(true);
      try {
        await u.Z.unbanUser(n.id, l.id), o()
      } catch (e) {
        h(new g.Z(e)), m(false)
      }
    }
  }
  return (0, r.jsxs)(c.Y0X, {
    className: S.bannedUserModal,
    transitionState: t,
    parentComponent: "GuildSettingsBans",
    children: [(0, r.jsxs)(c.xBx, {
      className: S.header,
      separator: false,
      children: [(0, r.jsx)(c.X6q, {
        variant: "heading-xl/semibold",
        className: S.userUsername,
        children: j.ZP.getUserTag(l, {
          mode: "username",
          identifiable: s ? "never" : "always"
        })
      }), s || l.hasUniqueUsername() ? null : (0, r.jsxs)(c.X6q, {
        variant: "heading-xl/semibold",
        className: S.userDiscrim,
        children: ["#", l.discriminator]
      })]
    }), (0, r.jsxs)(c.hzk, {
      className: S.content,
      children: [(0, r.jsx)(c.Text, {
        className: S.reasonHeader,
        variant: "text-xs/normal",
        children: E.intl.string(E.t["9Ki66O"])
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        children: null != a.reason && "" !== a.reason ? a.reason : E.intl.string(E.t["t+2Zcn"])
      }), null != p ? (0, r.jsx)(c.Text, {
        className: S.error,
        color: "text-danger",
        variant: "text-sm/normal",
        children: p.getAnyErrorMessage()
      }) : null]
    }), (0, r.jsx)(c.mzw, {
      className: S.footer,
      children: (0, r.jsxs)(c.hE2, {
        direction: "horizontal-reverse",
        children: [(0, r.jsx)(c.zxk, {
          variant: "critical-secondary",
          text: E.intl.string(E.t.UPcIa2),
          onClick: f,
          loading: d
        }), (0, r.jsx)(c.zxk, {
          variant: "primary",
          text: E.intl.string(E.t.i4jeWV),
          onClick: o
        })]
      })
    })]
  })
}
class D extends Chunk73800.PureComponent {
  render() {
    let {
      user: e,
      hideDiscriminator: t,
      guild: n
    } = this.props;
    return (0, Chunk255367.jsxs)(Chunk481060.P3F, {
      className: a()(Chunk93210.bannedUser, Chunk423279.card),
      onClick: this.handleShowModal,
      onContextMenu: this.handleContextMenu,
      children: [(0, Chunk255367.jsx)(Chunk481060.qEK, {
        src: module.getAvatarURL(null == require ? true : require.id, 40),
        "aria-label": module.username,
        size: Chunk481060.EFr.SIZE_40,
        className: Chunk93210.bannedUserAvatar
      }), (0, Chunk255367.jsxs)("div", {
        className: Chunk93210.username,
        children: [Chunk51144.ZP.getUserTag(module, {
          mode: "username",
          identifiable: exports ? "never" : "always"
        }), !exports && !module.hasUniqueUsername() && (0, Chunk255367.jsxs)("span", {
          className: Chunk93210.discrim,
          children: ["#", module.discriminator]
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), P(this, "handleShowModal", () => {
      let {
        guild: e,
        user: t,
        hideDiscriminator: n,
        ban: i
      } = this.props;
      (0, c.h7j)(l => (0, r.jsx)(Z, R(w({}, l), {
        guild: e,
        user: t,
        ban: i,
        hideDiscriminator: n
      })))
    }), P(this, "handleContextMenu", e => {
      (0, d.jW)(e, async () => {
        let {
          default: e
        } = await n.e("23835").then(n.bind(n, 768079));
        return t => (0, r.jsx)(e, R(w({}, t), {
          user: this.props.user
        }))
      })
    })
  }
}
class A extends Chunk73800.PureComponent {
  makeFilter(e) {
    if (null == e || 0 === e.length) return e => null != e;
    {
      let t = RegExp("^".concat(x.Z.escape(e)), "i");
      return n => null != n && (n.id === e || t.test(n.username))
    }
  }
  render() {
    let {
      bans: e,
      guild: t,
      searchQuery: n
    } = this.props;
    if (null == exports) return null;
    let i = this.getSortedBans(module, require);
    return (0, Chunk255367.jsx)(Chunk493544.Xi, {
      sections: [Math.max(1, Chunk73800.length)],
      sectionHeight: this.getSectionHeight,
      renderSection: this.renderSection,
      rowHeight: this.getRowHeight,
      renderRow: this.renderRow
    })
  }
  handleModerationClick() {
    Chunk434404.Z.setSection(Chunk981631.pNK.SAFETY), (0, Chunk84613.K)(Chunk740903.u.DM_AND_SPAM_PROTECTION)
  }
  handleQueryChange(e) {
    v.Z.setSearchQuery(e)
  }
  handleQueryClear() {
    Chunk434404.Z.setSearchQuery("")
  }
  constructor(...e) {
    super(...e), P(this, "getSortedBans", (0, b.oH)((e, t) => {
      if (null == e) return [];
      let n = this.makeFilter(t),
        r = [];
      for (let t of e.keys()) {
        let e = f.default.getUser(t);
        null != e && n(e) && r.push(e)
      }
      return r.sort((e, t) => e.username.localeCompare(t.username))
    })), P(this, "getRowHeight", (e, t) => {
      var n;
      if (e > 0) return 0;
      let {
        bans: r,
        searchQuery: i
      } = this.props, l = this.getSortedBans(r, i);
      if (0 === l.length && 1 === t) return 56;
      let a = l[t],
        s = null == r ? true : r.get(null != (n = null == a ? true : a.id) ? n : "");
      return 56 * (null != a && null != s)
    }), P(this, "renderRow", e => {
      var t;
      let {
        section: n,
        row: i
      } = e, {
        bans: l,
        streamerMode: a,
        guild: s,
        searchQuery: o
      } = this.props;
      if (n > 0) return null;
      if (null == l && 0 === i) return (0, r.jsx)(c.$jN, {
        className: S.spinner,
        type: c.$jN.Type.SPINNING_CIRCLE
      }, "spinner");
      let d = this.getSortedBans(l, o)[i],
        u = null == l ? true : l.get(null != (t = null == d ? true : d.id) ? t : "");
      if (null != d && null != u) return (0, r.jsx)(D, {
        user: d,
        ban: u,
        hideDiscriminator: a,
        guild: s
      }, d.id)
    }), P(this, "getSectionHeight", e => {
      if (e > 0) return 0;
      let {
        bans: t
      } = this.props;
      return null == t ? 462 : 120
    }), P(this, "renderSection", () => {
      var e;
      let t, {
        bans: i,
        theme: l,
        searchQuery: a
      } = this.props;
      null == i ? t = null : (null == i ? true : i.size) === 0 && (t = (0, r.jsxs)(c.ubH, {
        theme: l,
        className: S.emptyState,
        children: [(0, r.jsx)(c.oxh, {
          darkSrc: n(532747),
          lightSrc: n(433466),
          width: 256,
          height: 212
        }), (0, r.jsx)(c.OZU, {
          note: E.intl.string(E.t.zfCsAw),
          style: {
            maxWidth: 300
          },
          children: E.intl.string(E.t.ZEiY1N)
        })]
      }));
      let s = null != (e = null == i ? true : i.size) ? e : 0;
      return (0, r.jsxs)(c.hjN, {
        tag: c.RB0.H1,
        title: E.intl.formatToPlainString(E.t["bW+JJy"], {
          bans: s
        }),
        children: [(0, r.jsxs)("div", {
          className: S.settingsHeader,
          children: [(0, r.jsx)(c.R94, {
            type: c.geA.DESCRIPTION,
            className: S.description,
            children: E.intl.format(E.t.JcZ36u, {
              onModerationClick: this.handleModerationClick
            })
          }), null == t && (0, r.jsx)(c.E1j, {
            size: "sm",
            className: S.searchBar,
            query: null != a ? a : "",
            placeholder: E.intl.string(E.t.rTL1RE),
            "aria-label": E.intl.string(E.t.rTL1RE),
            onChange: this.handleQueryChange,
            onClear: this.handleQueryClear
          })]
        }), (0, r.jsx)(c.$i$, {
          style: {
            marginBottom: false
          }
        }), t]
      }, "bans-header")
    })
  }
}
let k = Chunk442837.ZP.connectStores([Chunk999382.Z, Chunk210887.Z, Chunk246946.Z], () => {
  let {
    bans: e,
    guild: t,
    searchQuery: n
  } = Chunk999382.Z.getProps();
  return {
    searchQuery: null != require ? require : "",
    bans: module,
    guild: exports,
    theme: Chunk210887.Z.theme,
    streamerMode: Chunk246946.Z.hidePersonalInformation
  }
})(A);

function L() {
  var e;
  let {
    guild: t
  } = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getProps(), [], Chunk392711.isEqual), {
    enabled: n
  } = Chunk372454.T.useExperiment({
    guildId: null != (e = null == exports ? true : exports.id) ? module : Chunk981631.lds,
    location: "4d6318_1"
  }, {
    autoTrackExposure: true
  });
  return require ? (0, Chunk255367.jsx)(Chunk1080.Z, {}) : (0, Chunk255367.jsx)(k, {})
}