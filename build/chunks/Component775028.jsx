/** Chunk was on 58121 **/
/** chunk id: 775028, original params: e,n,t (module,exports,require) **/
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
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      a = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), a.forEach(function(n) {
      var a;
      a = t[n], n in e ? Object.defineProperty(e, n, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = a
    })
  }
  return e
}

function D(e, n) {
  return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      t.push.apply(t, a)
    }
    return t
  })(Object(n)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
  }), e
}
let R = new Set([Chunk981631.d4z.GUILD_FORUM, Chunk981631.d4z.GUILD_MEDIA]),
  k = new Set([Chunk981631.d4z.GUILD_VOICE, Chunk981631.d4z.GUILD_STAGE_VOICE]);

function L(e) {
  let {
    guild: n,
    channel: r,
    onCategoryClick: l
  } = e, c = (0, w.Mf)(n.id, r.id, r.id), o = (0, w.t4)(n.id, r.id, r.id);
  return (0, a.jsxs)("div", {
    className: i()(T.categoryRow, {
      [T.uncategorized]: "null" === r.id
    }),
    onContextMenu: e => {
      (0, p.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([t.e("8965"), t.e("14280")]).then(t.bind(t, 139035));
        return t => (0, a.jsx)(e, D(A({}, t), {
          channel: r,
          guild: n
        }))
      })
    },
    children: [(0, a.jsx)(b.Text, {
      className: T.categoryText,
      color: "text-strong",
      variant: "text-lg/medium",
      lineClamp: 1,
      children: r.name
    }), "null" !== r.id && !o && (0, a.jsx)("div", {
      children: (0, a.jsx)(b.rsf, {
        label: E.intl.string(E.t.mSQwnW),
        checked: c,
        onChange: () => void(!o && l(n.id, r.id, r.id))
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
      index: n
    } = e;
    return (0, a.jsx)(b.Text, {
      variant: "text-xs/normal",
      className: T.subtitleSeparator,
      children: "\xb7"
    }, "separator-".concat(n))
  }),
  U = Chunk473749.memo(function(e) {
    let {
      channel: n,
      category: r,
      guild: l,
      isFirstChannel: o,
      isLastChannel: h,
      onChannelClick: _,
      tooltipDirection: Z = "right"
    } = e, {
      isSubscriptionGated: L
    } = (0, f.Z)(n.id), U = (0, w.Mf)(l.id, n.id, r.id), G = (0, w.t4)(l.id, n.id, r.id), W = (0, w.EH)(l.id, r.id), F = (0, c.e7)([y.Z], () => y.Z.getActiveThreadCount(l.id, n.id)), q = (0, c.e7)([C.Z], () => C.Z.shouldIndicateNewChannel(l.id, n.id)), z = function(e, n) {
      let t = [];
      return I.TPd.GUILD_THREADS_ONLY.has(e.type) && n >= 1 && t.push((0, a.jsx)(b.Text, {
        variant: "text-xs/normal",
        className: T.channelSubtitle,
        children: E.intl.format(E.t.z0qML2, {
          count: n
        })
      }, "thread-count")), k.has(e.type) || t.push((0, a.jsx)(b.Text, {
        variant: "text-xs/normal",
        className: T.channelSubtitle,
        children: (0, N.qw)(e.id)
      }, "active")), null != e.topic && e.topic.length > 0 && t.push((0, a.jsx)(s.Z, {
        className: B.markup,
        children: (0, a.jsx)(b.Text, {
          className: T.topic,
          variant: "text-xs/normal",
          children: x.Z.parseTopic(e.topic, true, {
            channelId: e.id
          })
        })
      }, "topic")), [t.map((e, n) => [e, (0, a.jsx)(M, {
        index: n
      }, "subtitle-separator-".concat(n))])].flat(2).slice(0, false)
    }(n, F), V = e => ((e.stopPropagation(), R.has(n.type) || e.shiftKey) ? (0, j.XU)(l.id, n.id) : n.isGuildStageVoice() || n.isGuildVoice() ? (0, O.Cq)(n) : v.Z.openChannelAsSidebar({
      guildId: n.guild_id,
      channelId: n.id,
      baseChannelId: P.oC.CHANNEL_BROWSER
    }), true), X = E.intl.string(E.t.vetGQs);
    n.isGuildStageVoice() || n.isGuildVoice() ? X = E.intl.string(E.t.VJlc0S) : n.isForumLikeChannel() && (X = E.intl.string(E.t["3xjX0U"]));
    let Q = G ? "text-muted" : "text-default",
      Y = (0, b.dQu)(G ? d.Z.colors.TEXT_MUTED : d.Z.colors.TEXT_DEFAULT).hex();
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.u, {
        text: W,
        delay: 500,
        position: Z,
        children: (0, a.jsxs)(b.P3F, {
          className: i()(T.channelRow, {
            [T.firstChannel]: o,
            [T.lastChannel]: h,
            [T.disabled]: G
          }),
          onClick: e => {
            if (!G) return e.stopPropagation(), _(l.id, n.id, r.id), true
          },
          onContextMenu: e => {
            n.isGuildVocal() ? (0, p.jW)(e, async () => {
              let {
                default: e
              } = await Promise.all([t.e("79695"), t.e("18320"), t.e("83331"), t.e("81070")]).then(t.bind(t, 213202));
              return t => (0, a.jsx)(e, D(A({}, t), {
                channel: n,
                guild: l
              }))
            }) : (0, p.jW)(e, async () => {
              let {
                default: e
              } = await Promise.all([t.e("79695"), t.e("18320"), t.e("44011")]).then(t.bind(t, 373651));
              return t => (0, a.jsx)(e, D(A({}, t), {
                channel: n,
                guild: l
              }))
            })
          },
          children: [(0, a.jsxs)("div", {
            className: T.channelInfo,
            children: [(0, a.jsxs)("div", {
              className: T.channelName,
              children: [(0, a.jsx)(g._W, {
                channel: n,
                guild: l
              }), (0, a.jsx)(s.Z, {
                className: T.__invalid_name,
                children: (0, a.jsx)(b.Text, {
                  className: T.channelText,
                  variant: "text-md/medium",
                  lineClamp: 1,
                  color: Q,
                  children: n.name
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
      }), !h && (0, a.jsx)(H, {})]
    })
  });

function G(e) {
  let {
    categories: n,
    guild: t,
    className: l,
    innerClassName: c,
    hasSidebar: d
  } = e, {
    onChannelClick: s
  } = (0, _.Z)(t.id), u = (0, h.Nj)(o.z.CHANNEL_BROWSER_NUX) ? 0 : false, p = r.useCallback(e => {
    let {
      section: r
    } = e;
    if (0 === r && false === u) return null;
    let l = n._categories[r + u];
    return (0, a.jsx)(L, {
      channel: l.channel,
      guild: t,
      onCategoryClick: s
    }, l.channel.id)
  }, [n, t, u, s]), f = r.useCallback(e => {
    let {
      section: r,
      row: l
    } = e;
    if (0 === r && false === u) return (0, a.jsx)(Z.Z, {
      guild: t
    });
    let i = n._categories[r + u],
      c = n[i.channel.id][l];
    return null == c ? null : (0, a.jsx)(U, {
      category: i.channel,
      channel: c.channel,
      guild: t,
      isFirstChannel: 0 === l,
      isLastChannel: n[i.channel.id].length - 1 === l,
      tooltipDirection: d ? "right" : "top",
      onChannelClick: s
    }, c.channel.id)
  }, [n, t, u, d, s]), m = (0, Z.q)(t.id), g = (0, N.tn)(t.id, n, 64, m);
  return (0, a.jsx)(b._2F, {
    className: l,
    innerClassName: i()(c, T.scrollerInner),
    sectionHeight: 48,
    rowHeight: e => g[e].rowHeight,
    renderSection: p,
    renderRow: f,
    sections: g.map(e => e.rowCount)
  }, "channel-browser-list")
}