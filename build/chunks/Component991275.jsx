/** Chunk was on web.js **/
/** chunk id: 991275, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => ed,
  Y: () => eo
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk837381 = require("./837381.jsx"),
  Chunk884362 = require("./884362.js"),
  Chunk607399 = require("./607399.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk361610 = require("./361610.js"),
  Chunk414798 = require("./414798.js"),
  Chunk110574 = require("./110574.jsx"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk58149 = require("./58149.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk122997 = require("./122997.js"),
  Chunk276055 = require("./276055.jsx"),
  Chunk83974 = require("./83974.js"),
  Chunk420706 = require("./420706.jsx"),
  Chunk750770 = require("./750770.js"),
  Chunk485947 = require("./485947.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk509536 = require("./509536.jsx"),
  Chunk201275 = require("./201275.js"),
  Chunk111864 = require("./111864.js"),
  Chunk657048 = require("./657048.jsx"),
  Chunk728321 = require("./728321.jsx"),
  Chunk342296 = require("./342296.jsx"),
  Chunk773669 = require("./773669.js"),
  Chunk963307 = require("./963307.js"),
  Chunk317525 = require("./317525.js"),
  Chunk309010 = require("./309010.js"),
  Chunk741961 = require("./741961.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk203982 = require("./203982.js"),
  Chunk403362 = require("./403362.js"),
  Chunk427262 = require("./427262.js"),
  Chunk837921 = require("./837921.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk701939 = require("./701939.js");

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function X(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Z(e, t, n[t])
    })
  }
  return e
}

function Q(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function J(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Q(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function $(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = ee(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function ee(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let et = Chunk837921.Ay.getEnableHardwareAcceleration(),
  en = 18,
  er = 42,
  ei = {
    origin: {
      x: 38,
      y: 11
    },
    targetWidth: 232,
    targetHeight: 40,
    offset: {
      x: 0,
      y: 0
    }
  },
  ea = Chunk64700.memo(function(e) {
    let {
      colorString: t,
      colorStrings: a,
      colorRoleName: s,
      colorRoleId: o,
      isOwner: l,
      nick: c,
      user: u,
      currentUser: f,
      activities: p,
      applicationStream: h,
      status: E,
      channel: y,
      guildId: b,
      isTyping: O,
      isMobileOnline: v,
      premiumSince: A,
      nameplate: I
    } = e, S = $(e, ["colorString", "colorStrings", "colorRoleName", "colorRoleId", "isOwner", "nick", "user", "currentUser", "activities", "applicationStream", "status", "channel", "guildId", "isTyping", "isMobileOnline", "premiumSince", "nameplate"]), T = i.useRef(null), [C, N] = i.useState(false), R = null != A ? new Date(A) : null, P = i.useCallback(e => {
      (0, _.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("97262"), n.e("29534"), n.e("33818"), n.e("55296"), n.e("84841"), n.e("9001")]).then(n.bind(n, 107632)), t = F.A.isInChannel(U.A.getVoiceChannelId(), u.id);
        return n => (0, r.jsx)(e, J(X({}, n), {
          user: u,
          guildId: b,
          channel: y,
          showMediaItems: t
        }))
      })
    }, [u, b, y]), D = i.useCallback(() => {
      let e = "@".concat(Y.Ay.getUserTag(u, {
          decoration: "never"
        })),
        t = "<@".concat(u.id, ">");
      B._.dispatch(K.jej.TEXTAREA_FOCUS, {
        channelId: y.id
      }), B._.dispatchToLastSubscribed(K.jej.INSERT_TEXT, {
        plainText: e,
        rawText: t
      }), m.A.startTyping(y.id)
    }, [u, y.id]), x = i.useCallback(e => {
      null != b && (e.stopPropagation(), (0, w.K)({
        guildId: b,
        location: {
          section: K.JJy.MEMBER_LIST,
          object: K.ZSU.BOOST_GEM_ICON
        }
      }))
    }, [b]);
    return (0, r.jsx)(L.A, {
      targetElementRef: T,
      user: u,
      guildId: b,
      channelId: y.id,
      roleId: o,
      position: d.Fr ? "window_center" : "left",
      spacing: 16,
      onShiftClick: D,
      shouldShow: C,
      onRequestClose: () => {
        N(false)
      },
      children: e => {
        let {
          onClick: n,
          onMouseDown: i
        } = e, o = $(e, ["onClick", "onMouseDown"]);
        return (0, r.jsx)(g.A, X({
          ref: T,
          className: q.Dc,
          onContextMenu: P,
          shouldAnimateStatus: et,
          user: u,
          currentUser: f,
          nick: c,
          status: E,
          activities: p,
          applicationStream: h,
          isOwner: l,
          premiumSince: R,
          colorString: t,
          colorStrings: a,
          colorRoleName: s,
          isTyping: O,
          channel: y,
          guildId: b,
          isMobile: v,
          onClickPremiumGuildIcon: x,
          selected: C,
          itemProps: S,
          nameplate: I,
          onClick: e => {
            e.shiftKey ? null == D || D() : N(e => !e)
          },
          onMouseDown: e => {
            C ? e.stopPropagation() : null == i || i(e)
          }
        }, o))
      }
    })
  }),
  es = Chunk64700.memo(function(e) {
    let {
      colorRoleId: t
    } = e, n = $(e, ["colorRoleId"]), {
      channel: i,
      user: a,
      index: s
    } = e, o = (0, c.rm)("".concat(s)), l = (0, f.bG)([G.A], () => G.A.isTyping(i.id, a.id)), u = (0, f.bG)([V.default], () => V.default.getCurrentUser()), d = (0, f.bG)([k.A], () => {
      var e;
      return null != t ? null == (e = k.A.getRole(i.guild_id, t)) ? true : e.name : true
    }, [i, t]), p = (0, P.r)({
      user: a,
      guildId: i.guild_id
    });
    return (0, r.jsx)(ea, J(X({}, n, o), {
      isTyping: l,
      currentUser: u,
      colorRoleName: d,
      nameplate: p
    }))
  }),
  eo = Chunk64700.memo(function(e) {
    let {
      id: t,
      title: a,
      count: s,
      guildId: o,
      className: l
    } = e, c = (0, R.$7)({
      roleId: t,
      guildId: o,
      size: 16
    }), u = (0, f.bG)([j.default], () => null == s ? null : new Intl.NumberFormat(j.default.locale).format(s), [s]), d = i.useCallback(e => {
      (null == c ? true : c.src) != null && (0, _.L3)(e, async () => {
        let {
          default: e
        } = await n.e("33743").then(n.bind(n, 455538));
        return t => (0, r.jsx)(e, J(X({}, t), {
          imageUrl: c.src
        }))
      })
    }, [null == c ? true : c.src]);
    return t === K.clD.UNKNOWN ? (0, r.jsx)("div", {
      className: l,
      children: (0, r.jsx)("div", {
        className: q.k1
      })
    }) : (0, r.jsxs)(C.A, {
      className: l,
      children: [(0, r.jsx)(p.AC4, {
        children: null == s ? a : z.intl.format(z.t.Uaqbke, {
          title: a,
          count: s
        })
      }), (0, r.jsxs)("div", {
        className: q.CN,
        "aria-hidden": true,
        children: [null != c ? (0, r.jsx)("span", {
          onContextMenu: d,
          children: (0, r.jsx)(D.A, X({
            className: q.UT
          }, c))
        }) : null, (0, r.jsx)("span", {
          className: q.iy,
          children: a
        }), null == u ? null : (0, r.jsxs)("span", {
          children: ["\xa0— ", u]
        })]
      })]
    })
  });

function el(e) {
  let {
    index: t
  } = e, n = (0, c.rm)("".concat(t));
  return (0, r.jsx)(g.A, {
    itemProps: n
  })
}
class ec extends Chunk64700.Component {
  shouldComponentUpdate(e) {
    return e.channel.id !== this.props.channel.id || e.version !== this.props.version || e.groups.length !== this.props.groups.length
  }
  componentDidMount() {
    this.updateSubscription(), this.trackMemberListViewed(), this._areActivitiesExperimentallyHidden = (0, v.M)("ChannelMembers")
  }
  componentDidUpdate(e) {
    e.channel.id !== this.props.channel.id && this.updateSubscription(), this.trackMemberListViewed(), this.updateMaxContentFeedRowSeen()
  }
  getContentFeedAdjustedDimensions(e) {
    let {
      height: t,
      rowHeight: n,
      y: r
    } = e, i = this.getContentFeedHeight(), a = Math.max(0, t - Math.max(0, i - r)), s = Math.floor(a / n);
    return {
      height: a,
      rowHeight: n,
      rowsVisible: s,
      y: Math.max(0, r - i)
    }
  }
  getDimensions() {
    let e = this._list;
    if (null == e) return {
      y: 0,
      height: 0,
      rowHeight: 0
    };
    let {
      offsetHeight: t,
      scrollTop: n
    } = e.getScrollerState(), {
      rowHeight: r
    } = this.props, i = Math.floor(t / r);
    return this.getContentFeedAdjustedDimensions({
      height: t,
      rowHeight: r,
      rowsVisible: i,
      y: n
    })
  }
  render() {
    let {
      groups: e,
      listId: t,
      channel: n,
      sectionHeight: i
    } = this.props;
    return (0, r.jsx)(p.skg, {
      children: a => (0, r.jsx)(N.V0, {
        children: o => (0, r.jsx)("aside", {
          className: s()(q.yg, q.ML),
          "aria-labelledby": o,
          children: (0, r.jsx)(p.Fmo, {
            component: (0, r.jsx)(p.AC4, {
              children: (0, r.jsx)(p.H, {
                id: o,
                children: z.intl.format(z.t.JBQxV6, {
                  channel: n.name
                })
              })
            }),
            children: (0, r.jsx)(c.PR, {
              children: n => {
                let {
                  ref: o,
                  role: l
                } = n, c = $(n, ["ref", "role"]);
                return (0, r.jsx)(p.B8B, X({
                  innerRole: l,
                  innerAriaLabel: z.intl.string(z.t["9Oq93m"]),
                  ref: e => {
                    var t;
                    this._list = e, this.props.listRef.current = e, o.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
                  },
                  className: s()(q.ol, {
                    [q.Ij]: d.Fr
                  }),
                  paddingTop: 0,
                  sectionHeight: i,
                  rowHeight: this.getRowHeightComputer(),
                  renderSection: this.renderSection,
                  renderRow: this.renderRow,
                  sections: e.map(e => e.count),
                  onScroll: this.handleScroll,
                  fade: true
                }, c, a), t)
              }
            })
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), Z(this, "_list", null), Z(this, "_areActivitiesExperimentallyHidden", false), Z(this, "_firstApplicationIdOccurrences", null), Z(this, "_lastRowsVersion", true), Z(this, "lastReportedAnalyticsChannel", true), Z(this, "setList", e => {
      this._list = e, this.props.listRef.current = e
    }), Z(this, "renderSection", e => {
      let {
        section: t
      } = e, {
        groups: n,
        channel: a
      } = this.props, s = n[t];
      if ((0, A.l)(s)) return (0, i.createElement)(A.A, J(X({}, s), {
        key: "section-".concat(t)
      }));
      if (0 === t) {
        let {
          key: e
        } = s;
        return (0, r.jsx)(x.A, {
          tutorialId: "whos-online",
          position: "left",
          inlineSpecs: ei,
          children: (0, i.createElement)(eo, J(X({}, s), {
            key: "section-".concat(e),
            guildId: a.guild_id,
            className: q.lL
          }))
        }, "section-".concat(t))
      }
      return (0, i.createElement)(eo, J(X({}, s), {
        key: "section-".concat(t),
        guildId: a.guild_id,
        className: q.lL
      }))
    }), Z(this, "getRowProps", e => {
      let {
        groups: t,
        rows: n
      } = this.props, r = t[e.section];
      if (null == r) return null;
      let {
        index: i
      } = r;
      return null == i || "row" !== e.type ? null : n[i + 1 + e.row]
    }), Z(this, "getFirstApplicationIdOccurrences", () => {
      let {
        rows: e,
        version: t
      } = this.props;
      if (null != this._firstApplicationIdOccurrences && this._lastRowsVersion === t) return this._firstApplicationIdOccurrences;
      let n = new Set,
        r = new Set;
      for (let t of e)
        if (null != t && t.type === M.S9.CONTENT_INVENTORY) {
          let {
            entry: e
          } = t;
          if ("application_id" in e.extra && null != e.extra.application_id) {
            let t = e.extra.application_id;
            n.has(t) || (n.add(t), r.add(e.id))
          }
        } return this._firstApplicationIdOccurrences = r, this._lastRowsVersion = t, r
    }), Z(this, "renderRow", e => {
      let {
        section: t,
        row: n,
        rowIndex: i
      } = e, {
        channel: a
      } = this.props, s = this.getRowProps(e);
      if (null != s) {
        if (s.type === M.S9.MEMBER && "user" in s) {
          let {
            colorString: e,
            colorStrings: t,
            colorRoleId: n,
            user: o,
            status: l,
            isOwner: c,
            isMobileOnline: u,
            nick: d,
            activities: f,
            applicationStream: p,
            premiumSince: _
          } = s;
          return (0, r.jsx)(es, {
            colorString: e,
            colorStrings: t,
            colorRoleId: n,
            user: o,
            status: l,
            isOwner: c,
            nick: d,
            activities: this._areActivitiesExperimentallyHidden ? [] : f,
            applicationStream: p,
            channel: a,
            guildId: a.guild_id,
            premiumSince: _,
            isMobileOnline: u,
            index: i
          }, "member-".concat(s.user.id))
        }
        if (s.type === M.S9.CONTENT_INVENTORY) {
          let e = "content-inventory-".concat(s.entry.id);
          null != s.entry.original_id && (e += "-".concat(s.entry.original_id));
          let t = this.getFirstApplicationIdOccurrences().has(s.entry.id);
          return (0, r.jsx)(S.Ay, J(X({}, s), {
            channel: this.props.channel,
            index: i,
            isFirstApplicationOccurrence: t
          }), e)
        }
        if (s.type === M.S9.HIDDEN_CONTENT_INVENTORY) return (0, r.jsx)(I.A, {}, "content-inventory-hidden-entry")
      }
      return (0, r.jsx)(el, {
        index: i
      }, "placeholder-".concat(t, ":").concat(n))
    }), Z(this, "handleScroll", () => {
      this.updateSubscription(), this.updateMaxContentFeedRowSeen()
    }), Z(this, "updateMaxContentFeedRowSeen", l().debounce(() => {
      let e = this._list;
      if (null == e) return;
      let {
        offsetHeight: t,
        scrollTop: n
      } = e.getScrollerState(), r = n + t - this.props.sectionHeight;
      this.props.updateMaxContentFeedRowSeen(r)
    }, 50)), Z(this, "getContentFeedGroup", () => {
      let e = this.props.groups[T.f];
      if ((0, A.l)(e)) return e
    }), Z(this, "hasContentFeed", () => null != this.getContentFeedGroup()), Z(this, "getRowHeightComputer", () => {
      let e = this.getContentFeedGroup(),
        {
          rowHeight: t
        } = this.props;
      if (null != e) {
        let {
          rows: n
        } = this.props, r = e.index;
        return function(e, i) {
          if (e === T.f) {
            let e = n[r + 1 + i];
            return (0, S.h9)(e)
          }
          return t
        }
      }
      return t
    }), Z(this, "getContentFeedHeight", () => {
      let e = this.getContentFeedGroup();
      return null != e ? e.feedHeight + this.props.sectionHeight : 0
    }), Z(this, "updateSubscription", l().debounce(() => {
      if (null == this._list) return;
      let {
        channel: e
      } = this.props, {
        rowHeight: t,
        y: n,
        height: r
      } = this.getDimensions();
      (0, h.NJ)({
        guildId: e.guild_id,
        channelId: e.id,
        y: n,
        height: r,
        rowHeight: t
      })
    }, 50)), Z(this, "trackMemberListViewed", () => {
      var e;
      if (this.lastReportedAnalyticsChannel === this.props.channel.id) return;
      let t = null == (e = this._list) ? true : e.getItems(),
        {
          rowsVisible: n
        } = this.getDimensions();
      if (true === n || 0 === n || null == t) return;
      this.hasContentFeed() && (t = t.filter(e => e.section !== T.f));
      let r = t.map(e => this.getRowProps(e)).slice(0, n + 1).filter(H.Vq);
      if (0 === r.length) return;
      let i = r.reduce((e, t) => {
        var n;
        return t.type !== M.S9.MEMBER || (e.num_users_visible++, t.isMobileOnline && e.num_users_visible_with_mobile_indicator++, null != t.activities && t.activities.length > 0 && (e.num_users_visible_with_activity++, t.activities.some(e => e.type === K.$pd.PLAYING) && e.num_users_visible_with_game_activity++), null != t.user.avatarDecoration && e.num_users_visible_with_avatar_decoration++, (null == (n = t.user.collectibles) ? true : n.nameplate) != null && e.num_users_visible_with_nameplate++), e
      }, {
        num_users_visible: 0,
        num_users_visible_with_mobile_indicator: 0,
        num_users_visible_with_game_activity: 0,
        num_users_visible_with_activity: 0,
        num_users_visible_with_avatar_decoration: 0,
        num_users_visible_with_nameplate: 0
      });
      this.lastReportedAnalyticsChannel = this.props.channel.id, b.Ay.trackWithMetadata(K.HAw.MEMBER_LIST_VIEWED, X({}, i))
    })
  }
}

function eu(e) {
  let {
    channel: t,
    className: n
  } = e, {
    analyticsLocations: a
  } = (0, O.Ay)(y.A.MEMBER_LIST), o = (0, f.bG)([E.A], () => E.A.keyboardModeEnabled), l = (0, f.cf)([M.Ay], () => M.Ay.getProps(t.guild_id, t.id)), {
    rows: d,
    groups: _,
    version: h,
    updateMaxRowSeen: m
  } = (0, T.s)({
    memberStoreProps: l,
    channelId: t.id,
    guildId: t.guild_id
  }), g = i.useRef(null), b = en + ((0, p.WHe)("lg") + (0, p.WHe)("xxs")), v = er, A = i.useCallback((e, t) => {
    let n = g.current;
    if (null == n) return;
    let r = parseInt(t, 10),
      [i, a] = n.getSectionRowFromIndex(r),
      s = 0 === i && 0 === a ? v : 0;
    n.scrollToIndex({
      section: i,
      row: a,
      padding: s,
      callback: () => {
        requestAnimationFrame(() => {
          var t;
          return null == (t = document.querySelector(e)) ? true : t.focus({
            preventScroll: true
          })
        })
      }
    })
  }, [v]), I = i.useCallback(() => new Promise(e => {
    let t = g.current;
    if (null == t) return e();
    t.scrollToTop({
      callback: () => requestAnimationFrame(() => e())
    })
  }), []), S = i.useCallback(() => new Promise(e => {
    let t = g.current;
    if (null == t) return e();
    t.scrollToBottom({
      callback() {
        requestAnimationFrame(() => setTimeout(e, 100))
      }
    })
  }), []), C = (0, u.Ay)({
    id: "members-".concat(t.id),
    setFocus: A,
    isEnabled: o,
    scrollToStart: I,
    scrollToEnd: S
  });
  return (0, r.jsx)(O.f5, {
    value: a,
    children: (0, r.jsx)("div", {
      className: s()(q.kL, n),
      children: (0, r.jsx)(c.hD, {
        navigator: C,
        children: (0, r.jsx)(ec, J(X({}, e, l), {
          version: h,
          groups: _,
          rows: d,
          listRef: g,
          updateMaxContentFeedRowSeen: m,
          sectionHeight: b,
          rowHeight: v
        }))
      })
    })
  })
}

function ed(e) {
  let {
    channel: t,
    className: n
  } = e, a = i.useDeferredValue(t);
  return i.useMemo(() => (0, r.jsx)(eu, {
    channel: a,
    className: n
  }), [a, n])
}