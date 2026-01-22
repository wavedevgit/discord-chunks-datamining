/** Chunk was on 98063 **/
/** chunk id: 143154, original params: e,a,l (module,exports,require) **/
require.d(exports, {
  default: () => T
}), require("./228524.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk713654 = require("./713654.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk508675 = require("./508675.js"),
  Chunk7584 = require("./7584.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk714991 = require("./714991.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk447696 = require("./447696.js"),
  Chunk684407 = require("./684407.js"),
  Chunk547716 = require("./547716.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk486856 = require("./486856.js");
let S = e => {
    var a;
    let {
      channelData: l,
      onClose: n,
      trackOptionClick: s
    } = e, r = (0, t.bG)([j.A], () => j.A.getChannel(l.channel_id)), u = (0, t.bG)([N.A], () => null != r && N.A.can(y.xB.VIEW_CHANNEL, r)), f = (0, t.bG)([m.Ay], () => null != l.emoji_id ? m.Ay.getCustomEmojiById(l.emoji_id) : null, [l.emoji_id]), x = null != l.emoji_name ? h.Ay.getByName(h.Ay.convertSurrogateToName(l.emoji_name, false)) : null, b = null != (a = (0, o.gU)(r)) ? a : c.N$i;
    return null != r && u ? (0, i.jsxs)(c.DUT, {
      className: I.NV,
      onClick: () => {
        s(), n(), (0, _.uh)(r.guild_id, r.id)
      },
      children: [null != f || null != x ? (0, i.jsx)(d.A, {
        emojiName: null != l.emoji_id ? null == f ? true : f.name : l.emoji_name,
        animated: null != f && f.animated,
        emojiId: null == f ? true : f.id,
        autoplay: true,
        className: I.oK
      }) : (0, i.jsx)(b, {
        className: I.p
      }), (0, i.jsxs)("div", {
        className: I.uP,
        children: [(0, i.jsx)(c.Text, {
          variant: "text-md/normal",
          className: I.I0,
          children: l.description
        }), (0, i.jsxs)(c.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          children: [(0, i.jsx)(b, {
            className: I.nO,
            size: "xxs",
            color: "currentColor"
          }), (0, i.jsx)("span", {
            children: r.name
          })]
        })]
      }), (0, i.jsx)(p.A, {
        direction: p.A.Directions.RIGHT,
        className: I.R_
      })]
    }) : null
  },
  T = e => {
    var a;
    let {
      onClose: l,
      transitionState: d,
      guildId: o,
      isPreview: m
    } = e, h = (0, t.bG)([b.A], () => b.A.getGuild(o)), {
      welcomeScreen: _,
      fetching: j,
      hasError: N
    } = (0, t.cf)([C.A], () => ({
      welcomeScreen: C.A.get(o),
      fetching: C.A.isFetching(),
      hasError: C.A.hasError()
    })), p = (0, u.GV)();
    n.useEffect(() => {
      null == _ && (0, A.Fy)(o)
    }, [o, _]), n.useEffect(() => {
      false === j && true === N && null == _ && l()
    }, [j, N, l, _]), n.useEffect(() => {
      _ === C.E && false === j && l()
    }, [l, _, j]), n.useEffect(() => {
      true !== m && g.default.track(v.HAw.OPEN_MODAL, {
        type: E.H,
        guild_id: o
      })
    }, [o, m]);
    let y = n.useCallback(e => {
      var a;
      if (null == _ || true === m) return;
      let l = [],
        i = [],
        n = false;
      null == (a = _.welcome_channels) || a.forEach(e => {
        l.push(e.description), i.push(e.channel_id), null != e.emoji_id && (n = true)
      }), g.default.track(v.HAw.GUILD_WELCOME_SCREEN_OPTION_SELECTED, {
        index: e,
        guild_id: o,
        options: l,
        options_channel_ids: i,
        guild_description: _.description,
        has_custom_emojis: n
      })
    }, [o, m, _]);
    return null == h ? null : null == _ ? (0, i.jsx)(s.Modal, {
      transitionState: d,
      "aria-label": k.intl.string(k.t.ZTNur7),
      title: k.intl.string(k.t.ZTNur7),
      onClose: () => Promise.resolve(l()),
      actions: [],
      children: (0, i.jsx)(c.y$y, {
        type: c.y$y.Type.SPINNING_CIRCLE
      })
    }) : (0, i.jsx)(s.Modal, {
      transitionState: d,
      "aria-labelledby": p,
      actions: [{
        text: k.intl.string(k.t.jizr82),
        onClick: l,
        variant: "secondary"
      }],
      title: k.intl.string(k.t["3iCBUn"]),
      onClose: () => Promise.resolve(l()),
      children: (0, i.jsxs)("div", {
        className: I.jE,
        children: [(0, i.jsx)(r.Ay, {
          mask: r.Ay.Masks.SQUIRCLE,
          width: 64,
          height: 64,
          className: I.$f,
          children: (0, i.jsx)(f.A, {
            size: f.A.Sizes.LARGER,
            guild: h,
            active: true,
            animate: true,
            tabIndex: false
          })
        }), (0, i.jsx)(c.Heading, {
          variant: "heading-xl/semibold",
          className: I.wx,
          id: p,
          children: k.intl.format(k.t["0aydCN"], {
            guildName: h.name,
            guildNameHook: (e, a) => (0, i.jsxs)("span", {
              children: [(0, i.jsx)(x.A, {
                guild: h,
                className: I.eZ,
                flowerStarClassName: I.mP,
                tooltipColor: c.STz.Colors.PRIMARY
              }), (0, i.jsx)("strong", {
                className: I.aC,
                children: e
              })]
            }, a)
          })
        }), null != _.description ? (0, i.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          className: I.eF,
          children: _.description
        }) : null, (0, i.jsx)(c.Heading, {
          variant: "heading-sm/semibold",
          className: I.XU,
          children: k.intl.string(k.t["haj5+i"])
        }), (0, i.jsx)("div", {
          className: I.fF,
          children: null == (a = _.welcome_channels) ? true : a.map((e, a) => (0, i.jsx)(S, {
            channelData: e,
            trackOptionClick: () => y(a),
            onClose: l
          }, "".concat(e.channel_id, "-").concat(a)))
        })]
      })
    })
  }