/** Chunk was on 58121 **/
/** chunk id: 775028, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => G
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
  Chunk444630 = require("./444630.js"),
  Chunk430864 = require("./430864.js");

function A(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(n) {
      var r;
      r = t[n], n in e ? Object.defineProperty(e, n, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = r
    })
  }
  return e
}

function k(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}
let D = new Set([Chunk981631.d4z.GUILD_FORUM, Chunk981631.d4z.GUILD_MEDIA]),
  R = new Set([Chunk981631.d4z.GUILD_VOICE, Chunk981631.d4z.GUILD_STAGE_VOICE]);

function L(e) {
  let {
    guild: n,
    channel: l,
    onCategoryClick: i
  } = e, o = (0, w.Mf)(n.id, l.id, l.id), s = (0, w.t4)(n.id, l.id, l.id);
  return (0, r.jsxs)("div", {
    className: a()(T.categoryRow, {
      [T.uncategorized]: "null" === l.id
    }),
    onContextMenu: e => {
      (0, m.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([t.e("8965"), t.e("14280")]).then(t.bind(t, 139035));
        return t => (0, r.jsx)(e, k(A({}, t), {
          channel: l,
          guild: n
        }))
      })
    },
    children: [(0, r.jsx)(h.Text, {
      className: T.categoryText,
      color: "text-muted",
      variant: "text-sm/medium",
      lineClamp: 1,
      children: l.name
    }), "null" !== l.id && !s && (0, r.jsxs)(h.P3F, {
      className: T.selectAll,
      onClick: () => {
        s || i(n.id, l.id, l.id)
      },
      children: [(0, r.jsx)(p.$q, {
        className: T.selectAllCheckbox,
        size: 14,
        shape: p.zV.SMALL_BOX,
        value: o,
        type: p.M0.INVERTED,
        displayOnly: true
      }), (0, r.jsx)(h.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: E.intl.string(E.t.mSQwnW)
      })]
    })]
  })
}
let H = Chunk647438.memo(function() {
    return (0, Chunk951288.jsx)("div", {
      className: Chunk444630.separator
    })
  }),
  M = Chunk647438.memo(function(e) {
    let {
      index: n
    } = e;
    return (0, r.jsx)(h.Text, {
      variant: "text-xs/normal",
      className: T.subtitleSeparator,
      children: "\xb7"
    }, "separator-".concat(n))
  }),
  U = Chunk647438.memo(function(e) {
    let {
      channel: n,
      category: l,
      guild: i,
      isFirstChannel: s,
      isLastChannel: f,
      onChannelClick: I,
      tooltipDirection: Z = "right"
    } = e, {
      isSubscriptionGated: L
    } = (0, g.Z)(n.id), U = (0, w.Mf)(i.id, n.id, l.id), G = (0, w.t4)(i.id, n.id, l.id), W = (0, w.EH)(i.id, l.id), F = (0, o.e7)([y.Z], () => y.Z.getActiveThreadCount(i.id, n.id)), q = (0, o.e7)([C.Z], () => C.Z.shouldIndicateNewChannel(i.id, n.id)), z = function(e, n) {
      let t = [];
      return P.TPd.GUILD_THREADS_ONLY.has(e.type) && n >= 1 && t.push((0, r.jsx)(h.Text, {
        variant: "text-xs/normal",
        className: T.channelSubtitle,
        children: E.intl.format(E.t.z0qML2, {
          count: n
        })
      }, "thread-count")), R.has(e.type) || t.push((0, r.jsx)(h.Text, {
        variant: "text-xs/normal",
        className: T.channelSubtitle,
        children: (0, N.qw)(e.id)
      }, "active")), null != e.topic && e.topic.length > 0 && t.push((0, r.jsx)(d.Z, {
        className: B.markup,
        children: (0, r.jsx)(h.Text, {
          className: T.topic,
          variant: "text-xs/normal",
          children: b.Z.parseTopic(e.topic, true, {
            channelId: e.id
          })
        })
      }, "topic")), [t.map((e, n) => [e, (0, r.jsx)(M, {
        index: n
      }, "subtitle-separator-".concat(n))])].flat(2).slice(0, false)
    }(n, F), V = E.intl.string(E.t.vetGQs);
    n.isGuildStageVoice() || n.isGuildVoice() ? V = E.intl.string(E.t.VJlc0S) : n.isForumLikeChannel() && (V = E.intl.string(E.t["3xjX0U"]));
    let X = G ? "text-muted" : "text-default",
      Q = (0, h.dQu)(G ? c.Z.colors.TEXT_MUTED : c.Z.colors.TEXT_DEFAULT).hex();
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(u.u, {
        text: W,
        delay: 500,
        position: Z,
        children: (0, r.jsxs)(h.P3F, {
          className: a()(T.channelRow, {
            [T.firstChannel]: s,
            [T.lastChannel]: f,
            [T.disabled]: G
          }),
          onClick: e => {
            if (!G) return e.stopPropagation(), I(i.id, n.id, l.id), true
          },
          onContextMenu: e => {
            n.isGuildVocal() ? (0, m.jW)(e, async () => {
              let {
                default: e
              } = await Promise.all([t.e("79695"), t.e("18320"), t.e("83331"), t.e("81070")]).then(t.bind(t, 213202));
              return t => (0, r.jsx)(e, k(A({}, t), {
                channel: n,
                guild: i
              }))
            }) : (0, m.jW)(e, async () => {
              let {
                default: e
              } = await Promise.all([t.e("79695"), t.e("18320"), t.e("44011")]).then(t.bind(t, 373651));
              return t => (0, r.jsx)(e, k(A({}, t), {
                channel: n,
                guild: i
              }))
            })
          },
          children: [(0, r.jsxs)("div", {
            className: T.channelInfo,
            children: [(0, r.jsxs)("div", {
              className: T.channelName,
              children: [(0, r.jsx)(x._W, {
                channel: n,
                guild: i
              }), (0, r.jsx)(d.Z, {
                className: T.__invalid_name,
                children: (0, r.jsx)(h.Text, {
                  className: T.channelText,
                  variant: "text-md/medium",
                  lineClamp: 1,
                  color: X,
                  children: n.name
                })
              }), L ? (0, r.jsx)(_.Z, {
                color: Q,
                className: T.premiumIcon
              }) : null, q ? (0, r.jsx)(h.IGR, {
                text: E.intl.string(E.t.y2b7CA),
                color: c.Z.unsafe_rawColors.BRAND_260.css,
                className: T.titleBadge
              }) : null]
            }), (0, r.jsx)("div", {
              className: T.channelSubtitles,
              children: z
            })]
          }), (0, r.jsxs)("div", {
            className: T.channelActions,
            children: [(0, r.jsx)("div", {
              className: T.viewChannelButtonWrapper,
              children: (0, r.jsx)(h.Button, {
                size: "sm",
                variant: "overlay-primary",
                onClick: e => ((e.stopPropagation(), D.has(n.type) || e.shiftKey) ? (0, j.XU)(i.id, n.id) : n.isGuildStageVoice() || n.isGuildVoice() ? (0, v.Cq)(n) : O.Z.openChannelAsSidebar({
                  guildId: n.guild_id,
                  channelId: n.id,
                  baseChannelId: S.oC.CHANNEL_BROWSER
                }), true),
                text: V
              })
            }), (0, r.jsx)(p.$q, {
              "aria-checked": U,
              value: U,
              type: p.M0.INVERTED,
              disabled: G,
              innerClassName: T.checkboxInner,
              displayOnly: true
            })]
          })]
        })
      }), !f && (0, r.jsx)(H, {})]
    })
  });

function G(e) {
  let {
    categories: n,
    guild: t,
    className: i,
    innerClassName: o,
    hasSidebar: c
  } = e, {
    onChannelClick: d
  } = (0, I.Z)(t.id), u = (0, f.Nj)(s.z.CHANNEL_BROWSER_NUX) ? 0 : false, p = l.useCallback(e => {
    let {
      section: l
    } = e;
    if (0 === l && false === u) return null;
    let i = n._categories[l + u];
    return (0, r.jsx)(L, {
      channel: i.channel,
      guild: t,
      onCategoryClick: d
    }, i.channel.id)
  }, [n, t, u, d]), m = l.useCallback(e => {
    let {
      section: l,
      row: i
    } = e;
    if (0 === l && false === u) return (0, r.jsx)(Z.Z, {
      guild: t
    });
    let a = n._categories[l + u],
      o = n[a.channel.id][i];
    return null == o ? null : (0, r.jsx)(U, {
      category: a.channel,
      channel: o.channel,
      guild: t,
      isFirstChannel: 0 === i,
      isLastChannel: n[a.channel.id].length - 1 === i,
      tooltipDirection: c ? "right" : "top",
      onChannelClick: d
    }, o.channel.id)
  }, [n, t, u, c, d]), g = (0, Z.q)(t.id), _ = (0, N.tn)(t.id, n, 64, g);
  return (0, r.jsx)(h._2F, {
    className: i,
    innerClassName: a()(o, T.scrollerInner),
    sectionHeight: 48,
    rowHeight: e => _[e].rowHeight,
    renderSection: p,
    renderRow: m,
    sections: _.map(e => e.rowCount)
  }, "channel-browser-list")
}