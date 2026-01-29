/** Chunk was on web.js **/
/** chunk id: 991275, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => ep,
  Y: () => ec
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
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
  Chunk496015 = require("./496015.js"),
  Chunk941726 = require("./941726.jsx"),
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

function X(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function J(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      X(e, t, n[t])
    })
  }
  return e
}

function $(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function ee(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function et(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = en(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function en(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let er = Chunk837921.Ay.getEnableHardwareAcceleration(),
  ei = 18,
  ea = 42,
  eo = {
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
  es = Chunk64700.memo(function(e) {
    let {
      colorString: t,
      colorStrings: a,
      colorRoleName: o,
      colorRoleId: s,
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
    } = e, S = et(e, ["colorString", "colorStrings", "colorRoleName", "colorRoleId", "isOwner", "nick", "user", "currentUser", "activities", "applicationStream", "status", "channel", "guildId", "isTyping", "isMobileOnline", "premiumSince", "nameplate"]), T = i.useRef(null), [C, N] = i.useState(false), w = null != A ? new Date(A) : null, R = i.useCallback(e => {
      (0, _.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("54809"), n.e("97262"), n.e("3795"), n.e("29534"), n.e("97283"), n.e("33818"), n.e("55296"), n.e("84841"), n.e("2016")]).then(n.bind(n, 107632)), t = H.A.isInChannel(F.A.getVoiceChannelId(), u.id);
        return n => (0, r.jsx)(e, ee(J({}, n), {
          user: u,
          guildId: b,
          channel: y,
          showMediaItems: t
        }))
      })
    }, [u, b, y]), D = i.useCallback(() => {
      let e = "@".concat(K.Ay.getUserTag(u, {
          decoration: "never"
        })),
        t = "<@".concat(u.id, ">");
      Y._.dispatch(q.jej.TEXTAREA_FOCUS, {
        channelId: y.id
      }), Y._.dispatchToLastSubscribed(q.jej.INSERT_TEXT, {
        plainText: e,
        rawText: t
      }), m.A.startTyping(y.id)
    }, [u, y.id]), L = i.useCallback(e => {
      null != b && (e.stopPropagation(), (0, P.K)({
        guildId: b,
        location: {
          section: q.JJy.MEMBER_LIST,
          object: q.ZSU.BOOST_GEM_ICON
        }
      }))
    }, [b]);
    return (0, r.jsx)(j.A, {
      targetElementRef: T,
      user: u,
      guildId: b,
      channelId: y.id,
      roleId: s,
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
        } = e, s = et(e, ["onClick", "onMouseDown"]);
        return (0, r.jsx)(g.A, J({
          ref: T,
          className: Q.Dc,
          onContextMenu: R,
          shouldAnimateStatus: er,
          user: u,
          currentUser: f,
          nick: c,
          status: E,
          activities: p,
          applicationStream: h,
          isOwner: l,
          premiumSince: w,
          colorString: t,
          colorStrings: a,
          colorRoleName: o,
          isTyping: O,
          channel: y,
          guildId: b,
          isMobile: v,
          onClickPremiumGuildIcon: L,
          selected: C,
          itemProps: S,
          nameplate: I,
          onClick: e => {
            e.shiftKey ? null == D || D() : N(e => !e)
          },
          onMouseDown: e => {
            C ? e.stopPropagation() : null == i || i(e)
          }
        }, s))
      }
    })
  }),
  el = Chunk64700.memo(function(e) {
    let {
      colorRoleId: t
    } = e, n = et(e, ["colorRoleId"]), {
      channel: i,
      user: a,
      index: o
    } = e, s = (0, c.rm)("".concat(o)), l = (0, f.bG)([V.A], () => V.A.isTyping(i.id, a.id)), u = (0, f.bG)([B.default], () => B.default.getCurrentUser()), d = (0, f.bG)([G.A], () => {
      var e;
      return null != t ? null == (e = G.A.getRole(i.guild_id, t)) ? true : e.name : true
    }, [i, t]), p = (0, L.r)({
      user: a,
      guildId: i.guild_id
    });
    return (0, r.jsx)(es, ee(J({}, n, s), {
      isTyping: l,
      currentUser: u,
      colorRoleName: d,
      nameplate: p
    }))
  }),
  ec = Chunk64700.memo(function(e) {
    let {
      id: t,
      title: a,
      count: o,
      guildId: s,
      className: l
    } = e, c = (0, D.$7)({
      roleId: t,
      guildId: s,
      size: 16
    }), u = (0, f.bG)([k.default], () => null == o ? null : new Intl.NumberFormat(k.default.locale).format(o), [o]), d = i.useCallback(e => {
      (null == c ? true : c.src) != null && (0, _.L3)(e, async () => {
        let {
          default: e
        } = await n.e("33743").then(n.bind(n, 455538));
        return t => (0, r.jsx)(e, ee(J({}, t), {
          imageUrl: c.src
        }))
      })
    }, [null == c ? true : c.src]);
    return t === q.clD.UNKNOWN ? (0, r.jsx)("div", {
      className: l,
      children: (0, r.jsx)("div", {
        className: Q.k1
      })
    }) : (0, r.jsxs)(w.A, {
      className: l,
      children: [(0, r.jsx)(p.AC4, {
        children: null == o ? a : Z.intl.format(Z.t.Uaqbke, {
          title: a,
          count: o
        })
      }), (0, r.jsxs)("div", {
        className: Q.CN,
        "aria-hidden": true,
        children: [null != c ? (0, r.jsx)("span", {
          onContextMenu: d,
          children: (0, r.jsx)(x.A, J({
            className: Q.UT
          }, c))
        }) : null, (0, r.jsx)("span", {
          className: Q.iy,
          children: a
        }), null == u ? null : (0, r.jsxs)("span", {
          children: ["\xa0— ", u]
        })]
      })]
    })
  });

function eu(e) {
  let {
    index: t
  } = e, n = (0, c.rm)("".concat(t));
  return (0, r.jsx)(g.A, {
    itemProps: n
  })
}
class ed extends Chunk64700.Component {
  shouldComponentUpdate(e) {
    return e.channel.id !== this.props.channel.id || e.version !== this.props.version || e.groups.length !== this.props.groups.length
  }
  componentDidMount() {
    this.updateSubscription(), this.trackMemberListViewed(), this._areActivitiesExperimentallyHidden = (0, I.M)("ChannelMembers")
  }
  componentDidUpdate(e) {
    e.channel.id !== this.props.channel.id && this.updateSubscription(), this.trackMemberListViewed(), this.updateMaxContentFeedRowSeen()
  }
  getContentFeedAdjustedDimensions(e) {
    let {
      height: t,
      rowHeight: n,
      y: r
    } = e, i = this.getContentFeedHeight(), a = Math.max(0, t - Math.max(0, i - r)), o = Math.floor(a / n);
    return {
      height: a,
      rowHeight: n,
      rowsVisible: o,
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
      children: a => (0, r.jsx)(R.V0, {
        children: s => (0, r.jsx)("aside", {
          className: o()(Q.yg, Q.ML),
          "aria-labelledby": s,
          children: (0, r.jsx)(p.Fmo, {
            component: (0, r.jsx)(p.AC4, {
              children: (0, r.jsx)(p.H, {
                id: s,
                children: Z.intl.format(Z.t.JBQxV6, {
                  channel: n.name
                })
              })
            }),
            children: (0, r.jsx)(c.PR, {
              children: n => {
                let {
                  ref: s,
                  role: l
                } = n, c = et(n, ["ref", "role"]);
                return (0, r.jsx)(p.B8B, J({
                  innerRole: l,
                  innerAriaLabel: Z.intl.string(Z.t["9Oq93m"]),
                  ref: e => {
                    var t;
                    this._list = e, this.props.listRef.current = e, s.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
                  },
                  className: o()(Q.ol, {
                    [Q.Ij]: d.Fr
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
    super(...e), X(this, "_list", null), X(this, "_areActivitiesExperimentallyHidden", false), X(this, "_firstApplicationIdOccurrences", null), X(this, "_lastRowsVersion", true), X(this, "lastReportedAnalyticsChannel", true), X(this, "setList", e => {
      this._list = e, this.props.listRef.current = e
    }), X(this, "renderSection", e => {
      let {
        section: t
      } = e, {
        groups: n,
        channel: a
      } = this.props, o = n[t];
      if ((0, S.l)(o)) return (0, i.createElement)(S.A, ee(J({}, o), {
        key: "section-".concat(t)
      }));
      if (0 === t) {
        let {
          key: e
        } = o;
        return (0, r.jsx)(M.A, {
          tutorialId: "whos-online",
          position: "left",
          inlineSpecs: eo,
          children: (0, i.createElement)(ec, ee(J({}, o), {
            key: "section-".concat(e),
            guildId: a.guild_id,
            className: Q.lL
          }))
        }, "section-".concat(t))
      }
      return (0, i.createElement)(ec, ee(J({}, o), {
        key: "section-".concat(t),
        guildId: a.guild_id,
        className: Q.lL
      }))
    }), X(this, "getRowProps", e => {
      let {
        groups: t,
        rows: n
      } = this.props, r = t[e.section];
      if (null == r) return null;
      let {
        index: i
      } = r;
      return null == i || "row" !== e.type ? null : n[i + 1 + e.row]
    }), X(this, "getFirstApplicationIdOccurrences", () => {
      let {
        rows: e,
        version: t
      } = this.props;
      if (null != this._firstApplicationIdOccurrences && this._lastRowsVersion === t) return this._firstApplicationIdOccurrences;
      let n = new Set,
        r = new Set;
      for (let t of e)
        if (null != t && t.type === U.S9.CONTENT_INVENTORY) {
          let {
            entry: e
          } = t;
          if ("application_id" in e.extra && null != e.extra.application_id) {
            let t = e.extra.application_id;
            n.has(t) || (n.add(t), r.add(e.id))
          }
        } return this._firstApplicationIdOccurrences = r, this._lastRowsVersion = t, r
    }), X(this, "renderRow", e => {
      let {
        section: t,
        row: n,
        rowIndex: i
      } = e, {
        channel: a
      } = this.props, o = this.getRowProps(e);
      if (null != o) {
        if (o.type === U.S9.MEMBER && "user" in o) {
          let {
            colorString: e,
            colorStrings: t,
            colorRoleId: n,
            user: s,
            status: l,
            isOwner: c,
            isMobileOnline: u,
            nick: d,
            activities: f,
            applicationStream: p,
            premiumSince: _
          } = o;
          return (0, r.jsx)(el, {
            colorString: e,
            colorStrings: t,
            colorRoleId: n,
            user: s,
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
          }, "member-".concat(o.user.id))
        }
        if (o.type === U.S9.CONTENT_INVENTORY) {
          let e = "content-inventory-".concat(o.entry.id);
          null != o.entry.original_id && (e += "-".concat(o.entry.original_id));
          let t = this.getFirstApplicationIdOccurrences().has(o.entry.id);
          return (0, r.jsx)(C.Ay, ee(J({}, o), {
            channel: this.props.channel,
            index: i,
            isFirstApplicationOccurrence: t
          }), e)
        }
        if (o.type === U.S9.HIDDEN_CONTENT_INVENTORY) return (0, r.jsx)(T.A, {}, "content-inventory-hidden-entry")
      }
      return (0, r.jsx)(eu, {
        index: i
      }, "placeholder-".concat(t, ":").concat(n))
    }), X(this, "handleScroll", () => {
      this.updateSubscription(), this.updateMaxContentFeedRowSeen()
    }), X(this, "updateMaxContentFeedRowSeen", l().debounce(() => {
      let e = this._list;
      if (null == e) return;
      let {
        offsetHeight: t,
        scrollTop: n
      } = e.getScrollerState(), r = n + t - this.props.sectionHeight;
      this.props.updateMaxContentFeedRowSeen(r)
    }, 50)), X(this, "getContentFeedGroup", () => {
      let e = this.props.groups[N.f];
      if ((0, S.l)(e)) return e
    }), X(this, "hasContentFeed", () => null != this.getContentFeedGroup()), X(this, "getRowHeightComputer", () => {
      let e = this.getContentFeedGroup(),
        {
          rowHeight: t
        } = this.props;
      if (null != e) {
        let {
          rows: n
        } = this.props, r = e.index;
        return function(e, i) {
          if (e === N.f) {
            let e = n[r + 1 + i];
            return (0, C.h9)(e)
          }
          return t
        }
      }
      return t
    }), X(this, "getContentFeedHeight", () => {
      let e = this.getContentFeedGroup();
      return null != e ? e.feedHeight + this.props.sectionHeight : 0
    }), X(this, "updateSubscription", l().debounce(() => {
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
    }, 50)), X(this, "trackMemberListViewed", () => {
      var e;
      if (this.lastReportedAnalyticsChannel === this.props.channel.id) return;
      let t = null == (e = this._list) ? true : e.getItems(),
        {
          rowsVisible: n
        } = this.getDimensions();
      if (true === n || 0 === n || null == t) return;
      this.hasContentFeed() && (t = t.filter(e => e.section !== N.f));
      let r = t.map(e => this.getRowProps(e)).slice(0, n + 1).filter(W.Vq);
      if (0 === r.length) return;
      let i = r.reduce((e, t) => {
        var n;
        return t.type !== U.S9.MEMBER || (e.num_users_visible++, t.isMobileOnline && e.num_users_visible_with_mobile_indicator++, null != t.activities && t.activities.length > 0 && (e.num_users_visible_with_activity++, t.activities.some(e => e.type === q.$pd.PLAYING) && e.num_users_visible_with_game_activity++), null != t.user.avatarDecoration && e.num_users_visible_with_avatar_decoration++, (null == (n = t.user.collectibles) ? true : n.nameplate) != null && e.num_users_visible_with_nameplate++), e
      }, {
        num_users_visible: 0,
        num_users_visible_with_mobile_indicator: 0,
        num_users_visible_with_game_activity: 0,
        num_users_visible_with_activity: 0,
        num_users_visible_with_avatar_decoration: 0,
        num_users_visible_with_nameplate: 0
      });
      this.lastReportedAnalyticsChannel = this.props.channel.id, b.Ay.trackWithMetadata(q.HAw.MEMBER_LIST_VIEWED, J({}, i))
    })
  }
}

function ef(e) {
  let {
    channel: t,
    className: n
  } = e, {
    analyticsLocations: a
  } = (0, O.Ay)(y.A.MEMBER_LIST), s = (0, f.bG)([E.A], () => E.A.keyboardModeEnabled), l = (0, f.cf)([U.Ay], () => U.Ay.getProps(t.guild_id, t.id)), {
    rows: d,
    groups: _,
    version: h,
    updateMaxRowSeen: m
  } = (0, N.s)({
    memberStoreProps: l,
    channelId: t.id,
    guildId: t.guild_id
  }), g = i.useRef(null), b = ei + ((0, p.WHe)("lg") + (0, p.WHe)("xxs")), v = ea, A = i.useCallback((e, t) => {
    let n = g.current;
    if (null == n) return;
    let r = parseInt(t, 10),
      [i, a] = n.getSectionRowFromIndex(r),
      o = 0 === i && 0 === a ? v : 0;
    n.scrollToIndex({
      section: i,
      row: a,
      padding: o,
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
  }), []), T = (0, u.Ay)({
    id: "members-".concat(t.id),
    setFocus: A,
    isEnabled: s,
    scrollToStart: I,
    scrollToEnd: S
  });
  return (0, r.jsx)(O.f5, {
    value: a,
    children: (0, r.jsx)("div", {
      className: o()(Q.kL, n),
      children: (0, r.jsx)(c.hD, {
        navigator: T,
        children: (0, r.jsx)(ed, ee(J({}, e, l), {
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

function ep(e) {
  let {
    channel: t,
    className: n
  } = e, a = i.useDeferredValue(t), o = (0, v.p)({
    location: y.A.MEMBER_LIST
  });
  return i.useMemo(() => o ? (0, r.jsx)(A.r$, {
    children: (0, r.jsx)(ef, {
      channel: a,
      className: n
    })
  }) : (0, r.jsx)(ef, {
    channel: a,
    className: n
  }), [o, a, n])
}