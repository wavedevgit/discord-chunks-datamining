/** Chunk was on 52081 **/
/** chunk id: 803585, original params: e,t,n (module,exports,require) **/
let r, l;
require.d(exports, {
  A: () => O
}), require("./896048.js"), require("./733351.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk846293 = require("./846293.js"),
  Chunk198982 = require("./198982.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk4274 = require("./4274.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk516073 = require("./516073.js"),
  Chunk906471 = require("./906471.js"),
  Chunk168482 = require("./168482.js");
let E = "hTKzmak",
  T = (r = window.GLOBAL_ENV.INVITE_HOST, l = "", null == r && (r = location.host, l = Chunk652215.BVt.INVITE("")), "".concat(location.protocol, "//").concat(r).concat(l, "/")),
  A = [E, "".concat(T).concat(E), "".concat(T).concat("wumpus-friends")],
  g = e => {
    let {
      onClick: t
    } = e;
    return (0, i.jsxs)(s.DUT, {
      className: I.qd,
      onClick: () => {
        t(), (0, d.pX)(f.BVt.GUILD_DISCOVERY)
      },
      children: [(0, i.jsx)("img", {
        width: 40,
        height: 40,
        className: I.aL,
        alt: "",
        src: N
      }), (0, i.jsxs)("div", {
        children: [(0, i.jsx)(s.Heading, {
          className: I.qg,
          variant: "heading-md/semibold",
          children: m.intl.string(m.t.DwDxDU)
        }), (0, i.jsx)(s.Text, {
          className: I.qg,
          variant: "text-xs/normal",
          children: m.intl.string(m.t["5RL4CD"])
        })]
      }), (0, i.jsx)("img", {
        className: I.y8,
        alt: "",
        src: S
      })]
    })
  };

function O(e) {
  let {
    onBack: t,
    onClose: n,
    isSlideReady: r
  } = e, [l, d] = o.useState(""), [f, S] = o.useState(false), [N, O] = o.useState(null), D = o.useRef(null);
  o.useEffect(() => {
    var e;
    r && (null == (e = D.current) || e.focus())
  }, [r]);
  let C = e => {
    e.preventDefault();
    let t = l.trim();
    if ("" === t) return void O(m.intl.string(m.t.IRq5ah));
    O(null), S(true);
    let r = t.split("/"),
      i = r[r.length - 1];
    c.Ay.resolveInvite(i, "Join Guild", {
      inputValue: t
    }).then(e => {
      let {
        invite: t
      } = e;
      if (S(false), null == t) return void O(m.intl.string(m.t["GEYI+Z"]));
      if (null != t.channel) {
        let e = c.Ay.getInviteContext("Join Guild", t);
        c.Ay.acceptInvite({
          inviteKey: t.code,
          context: e,
          callback: e => {
            n(), c.Ay.transitionToInvite(e)
          }
        }).then(() => {}, e => {
          e instanceof u.Wl || e instanceof u.LG ? O((0, p.s)(e.code)) : O(m.intl.string(m.t.dDZRdy))
        })
      }
    }, e => {
      S(false);
      let t = new u.Wl(e);
      O((0, p.s)(t.code))
    })
  };
  return (0, i.jsxs)("div", {
    children: [(0, i.jsxs)(s.rQ0, {
      "data-migration-pending": true,
      className: I.wx,
      direction: _.A.Direction.VERTICAL,
      separator: false,
      children: [(0, i.jsx)(s.Heading, {
        className: I.DD,
        variant: "heading-xl/semibold",
        children: m.intl.string(m.t.riOUtB)
      }), (0, i.jsx)(s.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: m.intl.string(m.t["7jub2t"])
      }), (0, i.jsx)(s.s_y, {
        "data-migration-pending": true,
        className: I.b,
        onClick: n
      })]
    }), (0, i.jsxs)(s.$mQ, {
      "data-migration-pending": true,
      className: I.__invalid_content,
      children: [(0, i.jsx)("form", {
        onSubmit: C,
        className: I.$j,
        children: (0, i.jsx)(s.ksK, {
          label: m.intl.string(m.t.qreV25),
          required: true,
          error: N,
          value: l,
          onChange: d,
          placeholder: "".concat(T).concat(E),
          inputRef: D
        })
      }), (0, i.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: m.intl.string(m.t.Bnq46H)
      }), (0, i.jsx)("div", {
        className: I.eU,
        children: A.map(e => (0, i.jsx)(s.DUT, {
          className: I.Bb,
          onClick: () => d(e),
          children: e
        }, e))
      }), (0, i.jsx)(g, {
        onClick: n
      })]
    }), (0, i.jsxs)(s.jlY, {
      "data-migration-pending": true,
      className: I.qr,
      children: [(0, i.jsx)(s.Button, {
        variant: "primary",
        text: m.intl.string(m.t["Ts/9Ac"]),
        loading: f,
        onClick: C
      }), (0, i.jsx)(a.$n, {
        "data-migration-pending": true,
        color: a.$n.Colors.PRIMARY,
        look: a.$n.Looks.LINK,
        size: a.$n.Sizes.MIN,
        onClick: t,
        children: m.intl.string(m.t["13/7kX"])
      })]
    })]
  })
}