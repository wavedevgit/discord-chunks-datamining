/** Chunk was on 91315 **/
/** chunk id: 314208, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk616780 = require("./616780.js"),
  Chunk471445 = require("./471445.js"),
  Chunk905405 = require("./905405.js"),
  Chunk937889 = require("./937889.js"),
  Chunk739566 = require("./739566.js"),
  Chunk267128 = require("./267128.jsx"),
  Chunk884902 = require("./884902.js"),
  Chunk271383 = require("./271383.js"),
  Chunk306680 = require("./306680.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk709054 = require("./709054.js"),
  Chunk51144 = require("./51144.js"),
  Chunk144140 = require("./144140.js"),
  Chunk91159 = require("./91159.js"),
  Chunk217702 = require("./217702.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk915298 = require("./915298.js");

function S(e) {
  return e.isActiveThread() ? (0, r.jsx)(P, {
    channel: e
  }) : (0, r.jsx)(I, {
    channel: e
  })
}

function P(e) {
  let {
    channel: t
  } = e, n = (0, a.e7)([Z.Z], () => Z.Z.getMostRecentMessage(t.id));
  return null == n ? (0, r.jsx)(T, {
    channel: t
  }) : (0, r.jsx)(C, {
    channel: t,
    message: n
  })
}

function T(e) {
  let {
    channel: t
  } = e, n = (0, y.Ok)(t);
  return (0, r.jsxs)(s.Text, {
    className: N.subtext,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: [w.intl.string(w.t.Jmh6n5), "\xa0 • \xa0", (0, y.Ye)(n)]
  })
}

function C(e) {
  let {
    channel: t,
    message: n
  } = e;
  (0, i.$)({
    [t.guild_id]: [n.author.id]
  });
  let c = (0, a.e7)([x.default], () => {
      var e;
      return null != (e = x.default.getUser(n.author.id)) ? e : n.author
    }),
    {
      nick: f,
      colorString: j,
      colorStrings: b
    } = (0, h.ZP)(n),
    Z = (0, m.X7)(t.guild_id, c.id, b),
    {
      isBlocked: w,
      isIgnored: S
    } = (0, a.cj)([v.Z], () => ({
      isBlocked: v.Z.isBlockedForMessage(n),
      isIgnored: v.Z.isIgnoredForMessage(n)
    }), [n]),
    P = (0, d.p)(),
    T = l.useMemo(() => {
      let e = null != n.content && "" !== n.content ? (0, u.ZP)(n, {
          formatInline: true,
          shouldFilterKeywords: P
        }).content : null,
        {
          contentPlaceholder: t,
          renderedContent: l,
          trailingIcon: a,
          leadingIcon: s
        } = (0, g.f)(n, e, w, S, N.messageContent, {
          trailingIconClass: N.messageContentTrailingIcon,
          leadingIconClass: N.messageContentLeadingIcon,
          iconSize: O.WW
        });
      return (0, r.jsxs)(r.Fragment, {
        children: [s, null != l ? l : (0, r.jsx)("span", {
          children: t
        }), a]
      })
    }, [n, w, S, P]);
  return (0, r.jsxs)(s.Text, {
    className: N.subtext,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: [(0, r.jsx)(o.Z, {
      className: N.avatar,
      user: c,
      size: s.EFr.SIZE_16
    }), (0, r.jsx)(s.PUh, {
      name: f,
      colorString: j,
      colorStrings: Z,
      className: N.authorName
    }), ":\xa0", T, "\xa0 • \xa0", (0, y.Ye)(p.default.extractTimestamp(n.id))]
  })
}

function I(e) {
  var t, n, l, d;
  let {
    channel: u
  } = e, h = (0, a.e7)([j.ZP], () => j.ZP.lastMessageId(u.id)), g = null == h ? new Date(null != (n = null == (t = u.threadMetadata) ? true : t.archiveTimestamp) ? n : Date.now()).getTime() : p.default.extractTimestamp(h);
  (0, i.$)({
    [u.guild_id]: [u.ownerId]
  });
  let v = (0, a.e7)([x.default], () => x.default.getUser(u.ownerId)),
    Z = (0, a.e7)([f.ZP], () => f.ZP.getMember(u.guild_id, u.ownerId)),
    O = (0, m.X7)(u.guild_id, null == v ? true : v.id, null != (l = null == Z ? true : Z.colorStrings) ? l : null),
    S = null != (d = (0, c.KS)(u)) ? d : s.or_;
  return (0, r.jsx)(s.Text, {
    className: N.subtext,
    variant: "text-sm/normal",
    color: "header-secondary",
    children: null == v ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: N.noAvatarIcon,
        children: (0, r.jsx)(S, {
          width: 10,
          height: 10,
          size: "custom",
          color: "currentColor"
        })
      }), w.intl.format(w.t["5Wk9+v"], {
        time: (0, y.Ye)(g)
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.Z, {
        className: N.avatar,
        user: v,
        size: s.EFr.SIZE_16
      }), w.intl.format(w.t.GFDmd3, {
        authorHook(e, t) {
          var n, l;
          return (0, r.jsx)(s.PUh, {
            className: N.startedByName,
            colorString: null != (n = null == Z ? true : Z.colorString) ? n : null,
            colorStrings: O,
            name: null != (l = null == Z ? true : Z.nick) ? l : b.ZP.getName(v)
          }, t)
        }
      }), (0, r.jsx)("span", {
        className: N.bullet,
        children: "•"
      }), w.intl.format(w.t["5Wk9+v"], {
        time: (0, y.Ye)(g)
      })]
    })
  })
}