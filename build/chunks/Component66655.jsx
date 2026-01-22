/** Chunk was on 51711 **/
/** chunk id: 66655, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => M
}), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk39255 = require("./39255.jsx"),
  Chunk198982 = require("./198982.js"),
  Chunk845202 = require("./845202.jsx"),
  Chunk695184 = require("./695184.js"),
  Chunk427262 = require("./427262.js"),
  Chunk545868 = require("./545868.js"),
  Chunk997509 = require("./997509.js"),
  Chunk396816 = require("./396816.js"),
  Chunk856644 = require("./856644.js"),
  Chunk512031 = require("./512031.js"),
  Chunk737045 = require("./737045.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk489715 = require("./489715.js");

function M(e) {
  let {
    transitionState: t,
    onClose: a,
    roleId: M,
    guildId: R
  } = e, h = (0, s.bG)([p.A], () => p.A.getRole(M), [M]), [w, E] = n.useState(""), [S, y] = n.useState({}), [T, C] = n.useState(false), [_, O] = n.useState(null), j = n.useRef(null);
  n.useEffect(() => {
    u.A.requestMembers(R, w.trim().toLowerCase(), g.uc)
  }, [R, w]);
  let B = n.useCallback(e => !e.roles.includes(M), [M]),
    H = (0, g.SB)(R, B),
    G = n.useMemo(() => H.filter(e => (0, g.EF)(w, e)), [w, H]),
    P = n.useCallback(async () => {
      let e = Object.values(S).map(e => e.row.id);
      C(true);
      try {
        await f.A.bulkAddMemberRoles(R, M, e), (0, m.a)(R, M, false), a()
      } catch (t) {
        let e = new o.LG(t);
        C(false), O(e)
      }
    }, [R, M, S, a]),
    q = n.useMemo(() => G.map(e => {
      var t;
      let a = b.Ay.getUserTag(e.user);
      return {
        rowType: x.T6.MEMBER,
        name: null != (t = e.name) ? t : a,
        nickname: e.name,
        username: a,
        id: e.id,
        avatarURL: e.avatarURL,
        bot: e.bot,
        verifiedBot: e.verifiedBot,
        disabled: false,
        key: e.id
      }
    }), [G]),
    L = c.A.useSections({
      members: q
    }),
    N = n.useCallback(e => e.rowType === x.T6.MEMBER || e.rowType === x.T6.OWNER ? {
      type: d._.MEMBER,
      label: e.name,
      avatar: e.avatarURL
    } : null, []),
    U = n.useMemo(() => Object.keys(S).length, [S]);
  return (0, r.jsx)(c.A.Provider, {
    listRef: j,
    query: w,
    setQuery: E,
    pendingAdditions: S,
    setPendingAdditions: y,
    members: q,
    getRichTag: N,
    maxPendingRows: k.$S,
    children: (0, r.jsx)(i.Modal, {
      onClose: a,
      transitionState: t,
      title: A.intl.string(A.t.ZYOK46),
      subtitle: null != h ? A.intl.format(A.t["qP+nuZ"], {
        numMembers: k.$S,
        roleName: h.name
      }) : A.intl.format(A.t["3OxP4q"], {
        numMembers: k.$S
      }),
      input: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(c.A.SearchBox, {
          placeholderText: A.intl.string(A.t.vMiCaQ)
        }), null != _ ? (0, r.jsx)(l.Text, {
          className: v.k,
          variant: "text-xs/normal",
          color: "text-feedback-critical",
          children: _.getAnyErrorMessage()
        }) : null]
      }),
      listProps: {
        ref: j,
        sectionHeight: c.A.SECTION_HEIGHT,
        renderSection: c.A.renderSection,
        rowHeight: c.A.ROW_HEIGHT,
        renderRow: c.A.renderRow,
        sections: L
      },
      actions: [{
        text: A.intl.string(A.t["ETE/oC"]),
        variant: "secondary",
        onClick: a
      }, {
        text: A.intl.string(A.t.OYkgVk),
        variant: "primary",
        onClick: P,
        loading: T,
        disabled: 0 === U || U > k.$S
      }]
    })
  })
}