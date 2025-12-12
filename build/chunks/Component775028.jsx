/** Chunk was on 58121 **/
/** chunk id: 775028, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => G
}), require("./388685.js"), require("./539854.js"), require("./472816.js"), require("./794429.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk692547 = require("./692547.js"),
  Chunk194983 = require("./194983.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk266454 = require("./266454.js"),
  Chunk66999 = require("./66999.js"),
  Chunk549631 = require("./549631.jsx"),
  Chunk473403 = require("./473403.jsx"),
  Chunk454585 = require("./454585.js"),
  Chunk22082 = require("./22082.js"),
  Chunk703656 = require("./703656.js"),
  Chunk6025 = require("./6025.js"),
  Chunk922482 = require("./922482.js"),
  Chunk601070 = require("./601070.js"),
  Chunk216306 = require("./216306.js"),
  Chunk163 = require("./163.js"),
  Chunk753540 = require("./753540.js"),
  Chunk70297 = require("./70297.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk295907 = require("./295907.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk554966 = require("./554966.js"),
  Chunk960324 = require("./960324.js");

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function D(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let R = new Set([Chunk981631.d4z.GUILD_FORUM, Chunk981631.d4z.GUILD_MEDIA]),
  k = new Set([Chunk981631.d4z.GUILD_VOICE, Chunk981631.d4z.GUILD_STAGE_VOICE]);

function L(e) {
  let {
    guild: t,
    channel: r,
    onCategoryClick: l
  } = e, o = (0, w.Mf)(t.id, r.id, r.id), c = (0, w.t4)(t.id, r.id, r.id);
  return (0, a.jsxs)("div", {
    className: i()(T.categoryRow, {
      [T.uncategorized]: "null" === r.id
    }),
    onContextMenu: e => {
      (0, p.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("8965"), n.e("14280")]).then(n.bind(n, 139035));
        return n => (0, a.jsx)(e, D(A({}, n), {
          channel: r,
          guild: t
        }))
      })
    },
    children: [(0, a.jsx)(b.Text, {
      className: T.categoryText,
      color: "text-strong",
      variant: "text-lg/medium",
      lineClamp: 1,
      children: r.name
    }), "null" !== r.id && !c && (0, a.jsx)("div", {
      children: (0, a.jsx)(b.rsf, {
        label: E.intl.string(E.t.mSQwnW),
        checked: o,
        onChange: () => void(!c && l(t.id, r.id, r.id))
      })
    })]
  })
}
let H = Chunk473749.memo(function() {
    return (0, Chunk54381.jsx)("div", {
      className: Chunk554966.separator
    })
  }),
  M = Chunk473749.memo(function(e) {
    let {
      index: t
    } = e;
    return (0, a.jsx)(b.Text, {
      variant: "text-xs/normal",
      className: T.subtitleSeparator,
      children: "\xb7"
    }, "separator-".concat(t))
  }),
  U = Chunk473749.memo(function(e) {
    let {
      channel: t,
      category: r,
      guild: l,
      isFirstChannel: c,
      isLastChannel: f,
      onChannelClick: _,
      tooltipDirection: Z = "right"
    } = e, {
      isSubscriptionGated: L
    } = (0, h.Z)(t.id), U = (0, w.Mf)(l.id, t.id, r.id), G = (0, w.t4)(l.id, t.id, r.id), W = (0, w.EH)(l.id, r.id), F = (0, o.e7)([y.Z], () => y.Z.getActiveThreadCount(l.id, t.id)), q = (0, o.e7)([C.Z], () => C.Z.shouldIndicateNewChannel(l.id, t.id)), z = function(e, t) {
      let n = [];
      return I.TPd.GUILD_THREADS_ONLY.has(e.type) && t >= 1 && n.push((0, a.jsx)(b.Text, {
        variant: "text-xs/normal",
        className: T.channelSubtitle,
        children: E.intl.format(E.t.z0qML2, {
          count: t
        })
      }, "thread-count")), k.has(e.type) || n.push((0, a.jsx)(b.Text, {
        variant: "text-xs/normal",
        className: T.channelSubtitle,
        children: (0, N.qw)(e.id)
      }, "active")), null != e.topic && e.topic.length > 0 && n.push((0, a.jsx)(s.Z, {
        className: B.markup,
        children: (0, a.jsx)(b.Text, {
          className: T.topic,
          variant: "text-xs/normal",
          children: x.Z.parseTopic(e.topic, true, {
            channelId: e.id
          })
        })
      }, "topic")), [n.map((e, t) => [e, (0, a.jsx)(M, {
        index: t
      }, "subtitle-separator-".concat(t))])].flat(2).slice(0, false)
    }(t, F), V = e => ((e.stopPropagation(), R.has(t.type) || e.shiftKey) ? (0, j.XU)(l.id, t.id) : t.isGuildStageVoice() || t.isGuildVoice() ? (0, O.Cq)(t) : v.Z.openChannelAsSidebar({
      guildId: t.guild_id,
      channelId: t.id,
      baseChannelId: P.oC.CHANNEL_BROWSER
    }), true), X = E.intl.string(E.t.vetGQs);
    t.isGuildStageVoice() || t.isGuildVoice() ? X = E.intl.string(E.t.VJlc0S) : t.isForumLikeChannel() && (X = E.intl.string(E.t["3xjX0U"]));
    let Q = G ? "text-muted" : "text-default",
      Y = (0, b.dQu)(G ? d.Z.colors.TEXT_MUTED : d.Z.colors.TEXT_DEFAULT).hex();
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.u, {
        text: W,
        delay: 500,
        position: Z,
        children: (0, a.jsxs)(b.P3F, {
          className: i()(T.channelRow, {
            [T.firstChannel]: c,
            [T.lastChannel]: f,
            [T.disabled]: G
          }),
          onClick: e => {
            if (!G) return e.stopPropagation(), _(l.id, t.id, r.id), true
          },
          onContextMenu: e => {
            t.isGuildVocal() ? (0, p.jW)(e, async () => {
              let {
                default: e
              } = await Promise.all([n.e("79695"), n.e("18320"), n.e("83331"), n.e("81070")]).then(n.bind(n, 213202));
              return n => (0, a.jsx)(e, D(A({}, n), {
                channel: t,
                guild: l
              }))
            }) : (0, p.jW)(e, async () => {
              let {
                default: e
              } = await Promise.all([n.e("79695"), n.e("18320"), n.e("44011")]).then(n.bind(n, 373651));
              return n => (0, a.jsx)(e, D(A({}, n), {
                channel: t,
                guild: l
              }))
            })
          },
          children: [(0, a.jsxs)("div", {
            className: T.channelInfo,
            children: [(0, a.jsxs)("div", {
              className: T.channelName,
              children: [(0, a.jsx)(g._W, {
                channel: t,
                guild: l
              }), (0, a.jsx)(s.Z, {
                className: T.__invalid_name,
                children: (0, a.jsx)(b.Text, {
                  className: T.channelText,
                  variant: "text-md/medium",
                  lineClamp: 1,
                  color: Q,
                  children: t.name
                })
              }), L ? (0, a.jsx)(m.Z, {
                color: Y,
                className: T.premiumIcon
              }) : null, q ? (0, a.jsx)(b.IGR, {
                text: E.intl.string(E.t.y2b7CA),
                color: d.Z.unsafe_rawColors.BRAND_260.css,
                className: T.titleBadge
              }) : null]
            }), (0, a.jsx)("div", {
              className: T.channelSubtitles,
              children: z
            })]
          }), (0, a.jsxs)("div", {
            className: T.channelActions,
            children: [(0, a.jsx)("div", {
              className: T.viewChannelButtonWrapper,
              children: (0, a.jsx)(b.Button, {
                size: "sm",
                variant: "overlay-primary",
                onClick: V,
                text: X,
                onKeyDown: e => {
                  (e.key === S.vn.ENTER || e.key === S.vn.SPACE) && (e.preventDefault(), e.stopPropagation(), V(e))
                }
              })
            }), (0, a.jsx)(b.FZ5, {
              checked: U,
              disabled: G
            })]
          })]
        })
      }), !f && (0, a.jsx)(H, {})]
    })
  });

function G(e) {
  let {
    categories: t,
    guild: n,
    className: l,
    innerClassName: o,
    hasSidebar: d
  } = e, {
    onChannelClick: s
  } = (0, _.Z)(n.id), u = (0, f.Nj)(c.z.CHANNEL_BROWSER_NUX) ? 0 : false, p = r.useCallback(e => {
    let {
      section: r
    } = e;
    if (0 === r && false === u) return null;
    let l = t._categories[r + u];
    return (0, a.jsx)(L, {
      channel: l.channel,
      guild: n,
      onCategoryClick: s
    }, l.channel.id)
  }, [t, n, u, s]), h = r.useCallback(e => {
    let {
      section: r,
      row: l
    } = e;
    if (0 === r && false === u) return (0, a.jsx)(Z.Z, {
      guild: n
    });
    let i = t._categories[r + u],
      o = t[i.channel.id][l];
    return null == o ? null : (0, a.jsx)(U, {
      category: i.channel,
      channel: o.channel,
      guild: n,
      isFirstChannel: 0 === l,
      isLastChannel: t[i.channel.id].length - 1 === l,
      tooltipDirection: d ? "right" : "top",
      onChannelClick: s
    }, o.channel.id)
  }, [t, n, u, d, s]), m = (0, Z.q)(n.id), g = (0, N.tn)(n.id, t, 64, m);
  return (0, a.jsx)(b._2F, {
    className: l,
    innerClassName: i()(o, T.scrollerInner),
    sectionHeight: 48,
    rowHeight: e => g[e].rowHeight,
    renderSection: p,
    renderRow: h,
    sections: g.map(e => e.rowCount)
  }, "channel-browser-list")
}