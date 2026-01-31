/** Chunk was on 17534 **/
/** chunk id: 895903, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk104171 = require("./104171.jsx"),
  Chunk47868 = require("./47868.jsx"),
  Chunk986738 = require("./986738.jsx"),
  Chunk394412 = require("./394412.jsx"),
  Chunk859894 = require("./859894.jsx"),
  Chunk931991 = require("./931991.js"),
  Chunk426660 = require("./426660.jsx"),
  Chunk576705 = require("./576705.js"),
  Chunk233993 = require("./233993.js"),
  Chunk19844 = require("./19844.js"),
  Chunk505543 = require("./505543.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk529471 = require("./529471.js");

function x(e) {
  let {
    onClick: t,
    className: n
  } = e, l = c.cNw;
  return (0, r.jsx)(d.A, {
    iconContainerClassName: s()({
      [j.q8]: false
    }),
    icon: (0, r.jsx)(l, {
      size: "custom",
      color: "currentColor",
      className: j.Pz,
      height: 20,
      width: 20
    }),
    color: o.A.unsafe_rawColors.PRIMARY_700.css,
    title: _.intl.string(_.t["jMLfp/"]),
    description: _.intl.string(_.t["Vd/rEX"]),
    onClick: t,
    className: n
  })
}

function v(e) {
  let {
    channel: t
  } = e, {
    participants: n,
    usersInSummary: l
  } = (0, y.A)(t.id);
  return (0, r.jsxs)("div", {
    className: j.P1,
    children: [(0, r.jsx)(u.Ay, {
      className: j.Ip,
      guildId: t.guild_id,
      users: l,
      size: u.DN.SIZE_16
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      children: function(e) {
        if (0 === e.length) return "";
        if (1 === e.length) return _.intl.formatToPlainString(_.t["5ULgaQ"], {
          first: e[0].userNick
        });
        if (2 === e.length) return _.intl.formatToPlainString(_.t.BHK0Op, {
          first: e[0].userNick,
          second: e[1].userNick
        });
        let t = e.length - 2;
        return _.intl.formatToPlainString(_.t.T3MT4n, {
          first: e[0].userNick,
          second: e[1].userNick,
          numOthers: t
        })
      }(n)
    })]
  })
}

function E(e) {
  let {
    channel: t,
    onContinueClick: n
  } = e, i = (0, a.bG)([b.A], () => b.A.can(A.QY, t), [t]), o = t.guild_id, {
    canCreateGuildEvent: u
  } = (0, f.nr)(t), d = (0, O.A)(t.id), y = l.useRef(null);
  return (0, r.jsxs)("div", {
    className: j.kL,
    ref: y,
    children: [(0, r.jsx)(m.A, {
      eventTargetRef: y
    }), (0, r.jsxs)("div", {
      className: j.Qs,
      children: [(0, r.jsxs)("div", {
        className: j.N1,
        children: [(0, r.jsx)(c.Heading, {
          className: j.__invalid_title,
          variant: "heading-xxl/normal",
          children: _.intl.string(_.t.QGnDLs)
        }), (0, r.jsx)(c.Text, {
          tag: "div",
          className: j.VA,
          variant: "heading-lg/normal",
          children: _.intl.string(_.t.djfK36)
        })]
      }), d ? null : (0, r.jsx)(p.A, {
        channelId: t.id,
        showDismiss: false
      }), i ? (0, r.jsx)(g.A, {
        className: j.fN,
        channel: t
      }) : null, u ? (0, r.jsx)(h.A, {
        className: j.fN,
        guildId: o
      }) : null, i ? (0, r.jsx)(x, {
        className: s()({
          [j.fN]: true
        }),
        onClick: n
      }) : null, (0, r.jsx)(v, {
        channel: t
      })]
    })]
  })
}