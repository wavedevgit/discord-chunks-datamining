/** Chunk was on 96811 **/
/** chunk id: 264540, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => T
}), require("./747238.js"), require("./321073.js"), require("./896048.js"), require("./638769.js"), require("./839272.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk342952 = require("./342952.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk629357 = require("./629357.js"),
  Chunk280157 = require("./280157.js"),
  Chunk174768 = require("./174768.js"),
  Chunk146793 = require("./146793.js"),
  Chunk95701 = require("./95701.js"),
  Chunk260509 = require("./260509.js"),
  Chunk734057 = require("./734057.js"),
  Chunk205761 = require("./205761.js"),
  Chunk808728 = require("./808728.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk967198 = require("./967198.js"),
  Chunk287809 = require("./287809.js"),
  Chunk607567 = require("./607567.js"),
  Chunk403362 = require("./403362.js"),
  Chunk279250 = require("./279250.js"),
  Chunk652215 = require("./652215.js"),
  Chunk191850 = require("./191850.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk374166 = require("./374166.js");

function I(e) {
  let {
    result: t,
    onSelectChannel: r
  } = e, l = (0, a.bG)([b.A], () => b.A.getGuild(t.record.guild_id)), s = (0, a.yK)([A.Ay, S.default], () => A.Ay.getVoiceStatesForChannel(t.record).map(e => S.default.getUser(e.user.id)).filter(_.Vq));
  return (0, n.jsxs)(o.DUT, {
    className: N.p8,
    onClick: () => r(t.record.id),
    children: [(0, n.jsxs)("div", {
      className: N.nN,
      children: [(0, n.jsx)("img", {
        alt: "",
        src: null != l ? (0, x.Iv)(l, 32) : true,
        className: N.$f
      }), (0, n.jsxs)("div", {
        children: [(0, n.jsxs)(o.Text, {
          className: N.HA,
          variant: "text-md/medium",
          color: "interactive-text-default",
          children: [(0, n.jsx)(o.HKD, {
            size: "xs",
            color: "currentColor"
          }), " ", t.record.name]
        }), (0, n.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: null == l ? true : l.name
        })]
      })]
    }), (0, n.jsx)(c.A, {
      users: s,
      maxUsers: 3,
      hideOverflowCount: true
    })]
  })
}

function T(e) {
  let {
    onSelectChannel: t,
    className: r
  } = e, {
    search: s,
    query: c,
    results: x
  } = (0, h.A)({
    searchOptions: {
      frecencyBoosters: true
    }
  }), S = (0, a.yK)([y.A, g.Ay, j.A, b.A, v.A], () => {
    let e = [],
      t = y.A.getGuildId();
    if (null == t) return e;
    for (let r of g.Ay.getVocalChannelIds(t)) {
      let t = j.A.getChannel(r);
      null != t && (0, O.vz)(t, b.A, v.A) && e.push(t)
    }
    return e
  }), A = (0, a.yK)([u.A, j.A, m.A, b.A, v.A], () => {
    let e = [],
      t = new Set;
    for (let r of u.A.getChannelHistory()) {
      let n = j.A.getChannel(r);
      (null == n ? true : n.type) === C.rbe.GUILD_VOICE && (0, O.vz)(n, b.A, v.A) && (t.add(n.id), e.push(n))
    }
    for (let r of m.A.getFrequentlyWithoutFetchingLatest()) r instanceof p.YB && r.type === C.rbe.GUILD_VOICE && !t.has(r.id) && (0, O.vz)(r, b.A, v.A) && (t.add(r.id), e.push(r));
    return e
  }), T = l.useMemo(() => {
    let e = new Set(A.map(e => e.id)),
      t = new Set(S.map(e => e.id));
    return [...S.toSorted((t, r) => e.has(t.id) && !e.has(r.id) ? false : e.has(r.id) && !e.has(t.id) ? 1 : 0).map(e => (0, f.A)(e.id)).filter(_.Vq), ...A.filter(e => !t.has(e.id)).map(e => (0, f.A)(e.id)).filter(_.Vq)]
  }, [A, S]), P = "" !== c ? x : T;
  return (0, n.jsxs)("div", {
    className: i()(N.zr, r),
    children: [(0, n.jsx)("div", {
      className: N.ON,
      children: (0, n.jsx)(o.IWV, {
        placeholder: E.intl.string(E.t["3jvv+6"]),
        query: c,
        onChange: e => s({
          query: e,
          resultTypes: [d.rD.VOICE_CHANNEL]
        }),
        onClear: () => s({
          query: "",
          resultTypes: [d.rD.VOICE_CHANNEL]
        }),
        autoFocus: true
      })
    }), P.length > 0 ? (0, n.jsx)(o.B8B, {
      renderListHeader: function() {
        return (0, n.jsx)(o.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          children: E.intl.string(w.default.FZ9Fl7)
        })
      },
      sections: [P.length],
      sectionHeight: 0,
      rowHeight: 48,
      renderRow: function(e) {
        let {
          rowIndex: r
        } = e, l = P[r];
        return (0, n.jsx)(I, {
          result: l,
          onSelectChannel: t
        }, l.record.id)
      }
    }) : (0, n.jsx)(R, {})]
  })
}

function R() {
  return (0, n.jsxs)("div", {
    className: N.p$,
    children: [(0, n.jsx)(o.$p$, {
      className: N.Dw,
      size: "md",
      color: o.LU0.colors.ICON_MUTED
    }), (0, n.jsx)(o.Text, {
      className: N.jU,
      variant: "text-lg/medium",
      color: "text-strong",
      children: E.intl.string(w.default.sWGfr9)
    }), (0, n.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-subtle",
      children: E.intl.string(w.default["nBRtt/"])
    })]
  })
}