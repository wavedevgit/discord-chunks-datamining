/** Chunk was on 58121 **/
/** chunk id: 775028, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => W
}), require("./388685.js"), require("./539854.js"), require("./472816.js"), require("./794429.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk692547 = require("./692547.js"),
  Chunk194983 = require("./194983.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
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
  Chunk388032 = require("./388032.jsx"),
  Chunk174986 = require("./174986.js"),
  Chunk602009 = require("./602009.js");

function A(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      l = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), l.forEach(function(n) {
      var l;
      l = t[n], n in e ? Object.defineProperty(e, n, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = l
    })
  }
  return e
}

function R(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      t.push.apply(t, l)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}
let k = new Set([Chunk981631.d4z.GUILD_FORUM, Chunk981631.d4z.GUILD_MEDIA]),
  D = new Set([Chunk981631.d4z.GUILD_VOICE, Chunk981631.d4z.GUILD_STAGE_VOICE]);

function L(e) {
  let {
    guild: n,
    channel: r,
    onCategoryClick: i
  } = e, o = (0, I.Mf)(n.id, r.id, r.id), s = (0, I.t4)(n.id, r.id, r.id);
  return (0, l.jsxs)("div", {
    className: a()(T.categoryRow, {
      [T.uncategorized]: "null" === r.id
    }),
    onContextMenu: e => {
      (0, p.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([t.e("8965"), t.e("14280")]).then(t.bind(t, 139035));
        return t => (0, l.jsx)(e, R(A({}, t), {
          channel: r,
          guild: n
        }))
      })
    },
    children: [(0, l.jsx)(h.Text, {
      className: T.categoryText,
      color: "text-muted",
      variant: "text-sm/medium",
      lineClamp: 1,
      children: r.name
    }), "null" !== r.id && !s && (0, l.jsxs)(h.P3F, {
      className: T.selectAll,
      onClick: () => {
        s || i(n.id, r.id, r.id)
      },
      children: [(0, l.jsx)(m.$q, {
        className: T.selectAllCheckbox,
        size: 14,
        shape: m.zV.SMALL_BOX,
        value: o,
        type: m.M0.INVERTED,
        displayOnly: true
      }), (0, l.jsx)(h.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: S.intl.string(S.t.mSQwnW)
      })]
    })]
  })
}
let M = Chunk647438.memo(function() {
    return (0, Chunk951288.jsx)("div", {
      className: Chunk174986.separator
    })
  }),
  H = Chunk647438.memo(function(e) {
    let {
      index: n
    } = e;
    return (0, l.jsx)(h.Text, {
      variant: "text-xs/normal",
      className: T.subtitleSeparator,
      children: "\xb7"
    }, "separator-".concat(n))
  }),
  U = Chunk647438.memo(function(e) {
    let {
      channel: n,
      category: r,
      guild: i,
      isFirstChannel: s,
      isLastChannel: f,
      onChannelClick: Z,
      tooltipDirection: w = "right"
    } = e, {
      isSubscriptionGated: L
    } = (0, g.Z)(n.id), U = (0, I.Mf)(i.id, n.id, r.id), W = (0, I.t4)(i.id, n.id, r.id), G = (0, I.EH)(i.id, r.id), F = (0, o.e7)([O.Z], () => O.Z.getActiveThreadCount(i.id, n.id)), q = (0, o.e7)([b.Z], () => b.Z.shouldIndicateNewChannel(i.id, n.id)), z = function(e, n) {
      let t = [];
      return P.TPd.GUILD_THREADS_ONLY.has(e.type) && n >= 1 && t.push((0, l.jsx)(h.Text, {
        variant: "text-xs/normal",
        className: T.channelSubtitle,
        children: S.intl.format(S.t.z0qML2, {
          count: n
        })
      }, "thread-count")), D.has(e.type) || t.push((0, l.jsx)(h.Text, {
        variant: "text-xs/normal",
        className: T.channelSubtitle,
        children: (0, N.qw)(e.id)
      }, "active")), null != e.topic && e.topic.length > 0 && t.push((0, l.jsx)(d.Z, {
        className: B.markup,
        children: (0, l.jsx)(h.Text, {
          className: T.topic,
          variant: "text-xs/normal",
          children: C.Z.parseTopic(e.topic, true, {
            channelId: e.id
          })
        })
      }, "topic")), [t.map((e, n) => [e, (0, l.jsx)(H, {
        index: n
      }, "subtitle-separator-".concat(n))])].flat(2).slice(0, false)
    }(n, F), V = S.intl.string(S.t.vetGQs);
    n.isGuildStageVoice() || n.isGuildVoice() ? V = S.intl.string(S.t.VJlc0S) : n.isForumLikeChannel() && (V = S.intl.string(S.t["3xjX0U"]));
    let X = W ? "text-muted" : "text-default",
      Q = (0, h.dQu)(W ? c.Z.colors.TEXT_MUTED : c.Z.colors.TEXT_DEFAULT).hex();
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(u.u, {
        text: G,
        delay: 500,
        position: w,
        children: (0, l.jsxs)(h.P3F, {
          className: a()(T.channelRow, {
            [T.firstChannel]: s,
            [T.lastChannel]: f,
            [T.disabled]: W
          }),
          onClick: e => {
            if (!W) return e.stopPropagation(), Z(i.id, n.id, r.id), true
          },
          onContextMenu: e => {
            n.isGuildVocal() ? (0, p.jW)(e, async () => {
              let {
                default: e
              } = await Promise.all([t.e("79695"), t.e("18320"), t.e("83331"), t.e("81070")]).then(t.bind(t, 213202));
              return t => (0, l.jsx)(e, R(A({}, t), {
                channel: n,
                guild: i
              }))
            }) : (0, p.jW)(e, async () => {
              let {
                default: e
              } = await Promise.all([t.e("79695"), t.e("18320"), t.e("44011")]).then(t.bind(t, 373651));
              return t => (0, l.jsx)(e, R(A({}, t), {
                channel: n,
                guild: i
              }))
            })
          },
          children: [(0, l.jsxs)("div", {
            className: T.channelInfo,
            children: [(0, l.jsxs)("div", {
              className: T.channelName,
              children: [(0, l.jsx)(_._W, {
                channel: n,
                guild: i
              }), (0, l.jsx)(d.Z, {
                className: T.__invalid_name,
                children: (0, l.jsx)(h.Text, {
                  className: T.channelText,
                  variant: "text-md/medium",
                  lineClamp: 1,
                  color: X,
                  children: n.name
                })
              }), L ? (0, l.jsx)(x.Z, {
                color: Q,
                className: T.premiumIcon
              }) : null, q ? (0, l.jsx)(h.IGR, {
                text: S.intl.string(S.t.y2b7CA),
                color: c.Z.unsafe_rawColors.BRAND_260.css,
                className: T.titleBadge
              }) : null]
            }), (0, l.jsx)("div", {
              className: T.channelSubtitles,
              children: z
            })]
          }), (0, l.jsxs)("div", {
            className: T.channelActions,
            children: [(0, l.jsx)("div", {
              className: T.viewChannelButtonWrapper,
              children: (0, l.jsx)(h.Button, {
                size: "sm",
                variant: "overlay-primary",
                onClick: e => ((e.stopPropagation(), k.has(n.type) || e.shiftKey) ? (0, j.XU)(i.id, n.id) : n.isGuildStageVoice() || n.isGuildVoice() ? (0, y.Cq)(n) : v.Z.openChannelAsSidebar({
                  guildId: n.guild_id,
                  channelId: n.id,
                  baseChannelId: E.oC.CHANNEL_BROWSER
                }), true),
                text: V
              })
            }), (0, l.jsx)(m.$q, {
              "aria-checked": U,
              value: U,
              type: m.M0.INVERTED,
              disabled: W,
              innerClassName: T.checkboxInner,
              displayOnly: true
            })]
          })]
        })
      }), !f && (0, l.jsx)(M, {})]
    })
  });

function W(e) {
  let {
    categories: n,
    guild: t,
    className: i,
    innerClassName: o,
    hasSidebar: c
  } = e, {
    onChannelClick: d
  } = (0, Z.Z)(t.id), u = (0, f.Nj)(s.z.CHANNEL_BROWSER_NUX) ? 0 : false, m = r.useCallback(e => {
    let {
      section: r
    } = e;
    if (0 === r && false === u) return null;
    let i = n._categories[r + u];
    return (0, l.jsx)(L, {
      channel: i.channel,
      guild: t,
      onCategoryClick: d
    }, i.channel.id)
  }, [n, t, u, d]), p = r.useCallback(e => {
    let {
      section: r,
      row: i
    } = e;
    if (0 === r && false === u) return (0, l.jsx)(w.Z, {
      guild: t
    });
    let a = n._categories[r + u],
      o = n[a.channel.id][i];
    return null == o ? null : (0, l.jsx)(U, {
      category: a.channel,
      channel: o.channel,
      guild: t,
      isFirstChannel: 0 === i,
      isLastChannel: n[a.channel.id].length - 1 === i,
      tooltipDirection: c ? "right" : "top",
      onChannelClick: d
    }, o.channel.id)
  }, [n, t, u, c, d]), g = (0, w.q)(t.id), x = (0, N.tn)(t.id, n, 64, g);
  return (0, l.jsx)(h._2F, {
    className: i,
    innerClassName: a()(o, T.scrollerInner),
    sectionHeight: 48,
    rowHeight: e => x[e].rowHeight,
    renderSection: m,
    renderRow: p,
    sections: x.map(e => e.rowCount)
  }, "channel-browser-list")
}