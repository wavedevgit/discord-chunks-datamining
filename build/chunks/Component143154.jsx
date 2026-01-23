/** Chunk was on 98063 **/
/** chunk id: 143154, original params: e,l,a (module,exports,require) **/
require.d(exports, {
  default: () => w
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
let T = e => {
    var l;
    let {
      channelData: a,
      onClose: n,
      trackOptionClick: t
    } = e, d = (0, s.bG)([p.A], () => p.A.getChannel(a.channel_id)), u = (0, s.bG)([g.A], () => null != d && g.A.can(y.xB.VIEW_CHANNEL, d)), h = (0, s.bG)([m.Ay], () => null != a.emoji_id ? m.Ay.getCustomEmojiById(a.emoji_id) : null, [a.emoji_id]), x = null != a.emoji_name ? _.Ay.getByName(_.Ay.convertSurrogateToName(a.emoji_name, false)) : null, N = null != (l = (0, c.gU)(d)) ? l : o.N$i;
    return null != d && u ? (0, i.jsxs)(o.DUT, {
      className: k.NV,
      onClick: () => {
        t(), n(), (0, j.uh)(d.guild_id, d.id)
      },
      children: [null != h || null != x ? (0, i.jsx)(r.A, {
        emojiName: null != a.emoji_id ? null == h ? true : h.name : a.emoji_name,
        animated: null != h && h.animated,
        emojiId: null == h ? true : h.id,
        autoplay: true,
        className: k.oK
      }) : (0, i.jsx)(N, {
        className: k.p
      }), (0, i.jsxs)("div", {
        className: k.uP,
        children: [(0, i.jsx)(o.Text, {
          variant: "text-md/normal",
          className: k.I0,
          children: a.description
        }), (0, i.jsxs)(o.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          children: [(0, i.jsx)(N, {
            className: k.nO,
            size: "xxs",
            color: "currentColor"
          }), (0, i.jsx)("span", {
            children: d.name
          })]
        })]
      }), (0, i.jsx)(b.A, {
        direction: b.A.Directions.RIGHT,
        className: k.R_
      })]
    }) : null
  },
  w = e => {
    var l;
    let {
      onClose: a,
      transitionState: r,
      guildId: c,
      isPreview: m
    } = e, _ = (0, s.bG)([N.A], () => N.A.getGuild(c)), {
      welcomeScreen: j,
      fetching: p,
      hasError: g
    } = (0, s.cf)([E.A], () => ({
      welcomeScreen: E.A.get(c),
      fetching: E.A.isFetching(),
      hasError: E.A.hasError()
    })), b = (0, u.GV)();
    n.useEffect(() => {
      null == j && (0, C.Fy)(c)
    }, [c, j]), n.useEffect(() => {
      false === p && true === g && null == j && a()
    }, [p, g, a, j]), n.useEffect(() => {
      j === E.E && false === p && a()
    }, [a, j, p]), n.useEffect(() => {
      true !== m && A.default.track(v.HAw.OPEN_MODAL, {
        type: f.H,
        guild_id: c
      })
    }, [c, m]);
    let y = n.useCallback(e => {
      var l;
      if (null == j || true === m) return;
      let a = [],
        i = [],
        n = false;
      null == (l = j.welcome_channels) || l.forEach(e => {
        a.push(e.description), i.push(e.channel_id), null != e.emoji_id && (n = true)
      }), A.default.track(v.HAw.GUILD_WELCOME_SCREEN_OPTION_SELECTED, {
        index: e,
        guild_id: c,
        options: a,
        options_channel_ids: i,
        guild_description: j.description,
        has_custom_emojis: n
      })
    }, [c, m, j]);
    return null == _ ? null : null == j ? (0, i.jsx)(t.Modal, {
      transitionState: r,
      "aria-label": I.intl.string(I.t.ZTNur7),
      title: I.intl.string(I.t.ZTNur7),
      onClose: () => Promise.resolve(a()),
      actions: [],
      children: (0, i.jsx)(o.y$y, {
        type: o.y$y.Type.SPINNING_CIRCLE
      })
    }) : (0, i.jsx)(t.Modal, {
      transitionState: r,
      "aria-labelledby": b,
      actions: [{
        text: I.intl.string(I.t.jizr82),
        onClick: a,
        variant: "secondary"
      }],
      title: I.intl.string(I.t["3iCBUn"]),
      onClose: () => Promise.resolve(a()),
      children: (0, i.jsxs)("div", {
        className: k.jE,
        children: [(0, i.jsx)(d.Ay, {
          mask: d.Ay.Masks.SQUIRCLE,
          width: 64,
          height: 64,
          className: k.$f,
          children: (0, i.jsx)(h.A, {
            size: h.A.Sizes.LARGER,
            guild: _,
            active: true,
            animate: true,
            tabIndex: false
          })
        }), (0, i.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          className: k.wx,
          id: b,
          children: I.intl.format(I.t["0aydCN"], {
            guildName: _.name,
            guildNameHook: (e, l) => (0, i.jsxs)("span", {
              children: [(0, i.jsx)(x.A, {
                guild: _,
                className: k.eZ,
                flowerStarClassName: k.mP,
                tooltipColor: o.STz.Colors.PRIMARY
              }), (0, i.jsx)("strong", {
                className: k.aC,
                children: e
              })]
            }, l)
          })
        }), null != j.description ? (0, i.jsx)(o.Text, {
          variant: "text-sm/normal",
          color: "text-default",
          className: k.eF,
          children: j.description
        }) : null, (0, i.jsx)(o.Heading, {
          variant: "heading-sm/semibold",
          className: k.XU,
          children: I.intl.string(I.t["haj5+i"])
        }), (0, i.jsx)("div", {
          className: k.fF,
          children: null == (l = j.welcome_channels) ? true : l.map((e, l) => (0, i.jsx)(T, {
            channelData: e,
            trackOptionClick: () => y(l),
            onClose: a
          }, "".concat(e.channel_id, "-").concat(l)))
        })]
      })
    })
  }