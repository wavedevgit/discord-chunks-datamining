/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => W
}), n(47120), n(474991), n(398202), n(301563), n(653041), n(230036), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(392711),
  o = n(442837),
  c = n(481060),
  A = n(239091),
  d = n(749210),
  u = n(493544),
  g = n(479531),
  f = n(118012),
  m = n(210887),
  p = n(246946),
  h = n(594174),
  C = n(251625),
  b = n(226951),
  v = n(51144),
  x = n(434404),
  N = n(372454),
  j = n(999382),
  E = n(84613),
  I = n(740903),
  O = n(1080),
  y = n(981631),
  w = n(388032),
  P = n(528514),
  B = n(951565);

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      D(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
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

function L(e) {
  let {
    transitionState: t,
    guild: n,
    user: s,
    ban: a,
    hideDiscriminator: l,
    onClose: o
  } = e, [A, u] = i.useState(!1), [m, p] = i.useState(null);
  async function h() {
    if (null != n) {
      p(null), u(!0);
      try {
        await d.Z.unbanUser(n.id, s.id), o()
      } catch (e) {
        p(new g.Z(e)), u(!1)
      }
    }
  }
  return (0, r.jsxs)(c.Y0X, {
    className: P.bannedUserModal,
    transitionState: t,
    children: [(0, r.jsxs)(c.xBx, {
      className: P.header,
      separator: !1,
      children: [(0, r.jsx)(f.Z, {
        size: f.Z.Sizes.SIZE_24,
        className: P.userUsername,
        children: v.ZP.getUserTag(s, {
          mode: "username",
          identifiable: l ? "never" : "always"
        })
      }), l || s.isPomelo() ? null : (0, r.jsxs)(f.Z, {
        size: f.Z.Sizes.SIZE_24,
        className: P.userDiscrim,
        children: ["#", s.discriminator]
      })]
    }), (0, r.jsxs)(c.hzk, {
      className: P.content,
      children: [(0, r.jsx)(c.Text, {
        className: P.reasonHeader,
        variant: "text-xs/normal",
        children: w.NW.string(w.t["9Ki66O"])
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        children: null != a.reason && "" !== a.reason ? a.reason : w.NW.string(w.t["t+2Zcn"])
      }), null != m ? (0, r.jsx)(c.Text, {
        className: P.error,
        color: "text-danger",
        variant: "text-sm/normal",
        children: m.getAnyErrorMessage()
      }) : null]
    }), (0, r.jsxs)(c.mzw, {
      className: P.footer,
      children: [(0, r.jsx)(c.zxk, {
        onClick: h,
        look: c.zxk.Looks.LINK,
        color: c.zxk.Colors.RED,
        submitting: A,
        children: w.NW.string(w.t.UPcIa2)
      }), (0, r.jsx)(c.zxk, {
        onClick: o,
        children: w.NW.string(w.t.i4jeWV)
      })]
    })]
  })
}
class R extends i.PureComponent {
  render() {
    let {
      user: e,
      hideDiscriminator: t,
      guild: n
    } = this.props;
    return (0, r.jsxs)(c.P3F, {
      className: a()(P.bannedUser, B.card),
      onClick: this.handleShowModal,
      onContextMenu: this.handleContextMenu,
      children: [(0, r.jsx)(c.qEK, {
        src: e.getAvatarURL(null == n ? void 0 : n.id, 40),
        "aria-label": e.username,
        size: c.EFr.SIZE_40,
        className: P.bannedUserAvatar
      }), (0, r.jsxs)("div", {
        className: P.username,
        children: [v.ZP.getUserTag(e, {
          mode: "username",
          identifiable: t ? "never" : "always"
        }), !t && !e.isPomelo() && (0, r.jsxs)("span", {
          className: P.discrim,
          children: ["#", e.discriminator]
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), D(this, "handleShowModal", () => {
      let {
        guild: e,
        user: t,
        hideDiscriminator: n,
        ban: i
      } = this.props;
      (0, c.h7j)(s => (0, r.jsx)(L, S(T({}, s), {
        guild: e,
        user: t,
        ban: i,
        hideDiscriminator: n
      })))
    }), D(this, "handleContextMenu", e => {
      (0, A.jW)(e, async () => {
        let {
          default: e
        } = await n.e("23835").then(n.bind(n, 768079));
        return t => (0, r.jsx)(e, S(T({}, t), {
          user: this.props.user
        }))
      })
    })
  }
}
class Q extends i.PureComponent {
  makeFilter(e) {
    if (null == e || 0 === e.length) return e => null != e;
    {
      let t = RegExp("^".concat(b.Z.escape(e)), "i");
      return n => null != n && (n.id === e || t.test(n.username))
    }
  }
  render() {
    let {
      bans: e,
      guild: t,
      searchQuery: n
    } = this.props;
    if (null == t) return null;
    let i = this.getSortedBans(e, n);
    return (0, r.jsx)(u.Xi, {
      sections: [Math.max(1, i.length)],
      sectionHeight: this.getSectionHeight,
      renderSection: this.renderSection,
      rowHeight: this.getRowHeight,
      renderRow: this.renderRow
    })
  }
  handleModerationClick() {
    x.Z.setSection(y.pNK.SAFETY), (0, E.K)(I.u.DM_AND_SPAM_PROTECTION)
  }
  handleQueryChange(e) {
    x.Z.setSearchQuery(e)
  }
  handleQueryClear() {
    x.Z.setSearchQuery("")
  }
  constructor(...e) {
    super(...e), D(this, "getSortedBans", (0, C.oH)((e, t) => {
      if (null == e) return [];
      let n = this.makeFilter(t),
        r = [];
      for (let t of e.keys()) {
        let e = h.default.getUser(t);
        null != e && n(e) && r.push(e)
      }
      return r.sort((e, t) => e.username.localeCompare(t.username))
    })), D(this, "getRowHeight", (e, t) => {
      var n;
      if (e > 0) return 0;
      let {
        bans: r,
        searchQuery: i
      } = this.props, s = this.getSortedBans(r, i);
      if (0 === s.length && 1 === t) return 56;
      let a = s[t],
        l = null == r ? void 0 : r.get(null !== (n = null == a ? void 0 : a.id) && void 0 !== n ? n : "");
      return 56 * (null != a && null != l)
    }), D(this, "renderRow", e => {
      var t;
      let {
        section: n,
        row: i
      } = e, {
        bans: s,
        streamerMode: a,
        guild: l,
        searchQuery: o
      } = this.props;
      if (n > 0) return null;
      if (null == s && 0 === i) return (0, r.jsx)(c.$jN, {
        className: P.spinner,
        type: c.$jN.Type.SPINNING_CIRCLE
      }, "spinner");
      let A = this.getSortedBans(s, o)[i],
        d = null == s ? void 0 : s.get(null !== (t = null == A ? void 0 : A.id) && void 0 !== t ? t : "");
      if (null != A && null != d) return (0, r.jsx)(R, {
        user: A,
        ban: d,
        hideDiscriminator: a,
        guild: l
      }, A.id)
    }), D(this, "getSectionHeight", e => {
      if (e > 0) return 0;
      let {
        bans: t
      } = this.props;
      return null == t ? 462 : 120
    }), D(this, "renderSection", () => {
      var e;
      let t;
      let {
        bans: i,
        theme: s,
        searchQuery: a
      } = this.props;
      null == i ? t = null : (null == i ? void 0 : i.size) === 0 && (t = (0, r.jsxs)(c.ubH, {
        theme: s,
        className: P.emptyState,
        children: [(0, r.jsx)(c.oxh, {
          darkSrc: n(532747),
          lightSrc: n(433466),
          width: 256,
          height: 212
        }), (0, r.jsx)(c.OZU, {
          note: w.NW.string(w.t.zfCsAw),
          style: {
            maxWidth: 300
          },
          children: w.NW.string(w.t.ZEiY1N)
        })]
      }));
      let l = null !== (e = null == i ? void 0 : i.size) && void 0 !== e ? e : 0;
      return (0, r.jsxs)(c.hjN, {
        tag: c.RB0.H1,
        title: w.NW.formatToPlainString(w.t["bW+JJy"], {
          bans: l
        }),
        children: [(0, r.jsxs)("div", {
          className: P.settingsHeader,
          children: [(0, r.jsx)(c.R94, {
            type: c.geA.DESCRIPTION,
            className: P.description,
            children: w.NW.format(w.t.JcZ36u, {
              onModerationClick: this.handleModerationClick
            })
          }), null == t && (0, r.jsx)(c.E1j, {
            className: P.searchBar,
            query: null != a ? a : "",
            placeholder: w.NW.string(w.t.rTL1RE),
            "aria-label": w.NW.string(w.t.rTL1RE),
            onChange: this.handleQueryChange,
            onClear: this.handleQueryClear
          })]
        }), (0, r.jsx)(c.$i$, {
          style: {
            marginBottom: -1
          }
        }), t]
      }, "bans-header")
    })
  }
}
let Z = o.ZP.connectStores([j.Z, m.Z, p.Z], () => {
  let {
    bans: e,
    guild: t,
    searchQuery: n
  } = j.Z.getProps();
  return {
    searchQuery: null != n ? n : "",
    bans: e,
    guild: t,
    theme: m.Z.theme,
    streamerMode: p.Z.hidePersonalInformation
  }
})(Q);

function W() {
  var e;
  let {
    guild: t
  } = (0, o.e7)([j.Z], () => j.Z.getProps(), [], l.isEqual), {
    enabled: n
  } = N.T.useExperiment({
    guildId: null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : y.lds,
    location: "4d6318_1"
  }, {
    autoTrackExposure: !0
  });
  return n ? (0, r.jsx)(O.Z, {}) : (0, r.jsx)(Z, {})
}