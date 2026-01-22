/** Chunk was on 21968 **/
/** chunk id: 761437, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk157559 = require("./157559.js"),
  Chunk824953 = require("./824953.js"),
  Chunk964486 = require("./964486.js"),
  Chunk736653 = require("./736653.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk267001 = require("./267001.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk851121 = require("./851121.js"),
  Chunk734087 = require("./734087.js"),
  Chunk609621 = require("./609621.js");

function j(e) {
  let t, n, {
      guild: j,
      channel: O,
      customWebhooks: y,
      editedWebhook: A,
      selectableWebhookChannels: v,
      refToScroller: N,
      errors: E,
      canNavigate: T
    } = e,
    w = (0, d.Ay)(),
    [C, S] = r.useState(null),
    [_, I] = r.useState(null);
  if (null != O) n = O;
  else {
    let e = Object.values(v);
    n = e.length > 0 ? e[0] : null
  }
  let P = r.useCallback(async () => {
    if (T() && null !== n) {
      let e = await o.A.create(j.id, n.id).catch(e => {
        let {
          body: t,
          status: n
        } = e;
        return t && t.code === p.t02.TOO_MANY_WEBHOOKS ? s.A.show({
          title: m.intl.string(m.t.cCqsca),
          body: m.intl.string(m.t["w+QZoX"])
        }) : 429 === n ? s.A.show({
          title: m.intl.string(m.t.cCqsca),
          body: m.intl.string(m.t["YBM+UW"])
        }) : s.A.show({
          title: m.intl.string(m.t.cCqsca),
          body: m.intl.string(m.t["/4TwKf"])
        }), null
      });
      null != e && (I(e.id), S(e))
    }
  }, [T, n, j]);
  (0, c.Ay)(() => {
    0 === y.length && P()
  });
  let k = null !== n;
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(a.Text, {
      variant: "text-sm/normal",
      children: m.intl.format(m.t.WL0d0e, {
        helpdeskArticle: b.A.getArticleURL(p.MVz.WEBHOOKS),
        developersArticle: p.X7G.API_DOCS_WEBHOOKS
      })
    }), (0, i.jsx)(a.cGx, {
      className: g.zN
    }), y.length > 0 ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: g.Tf,
        children: (0, i.jsx)(a.Button, {
          variant: "primary",
          size: "sm",
          text: m.intl.string(m.t["nrO/HH"]),
          disabled: !k,
          onClick: P
        })
      }), (0, i.jsx)(f.A, {
        webhooks: y,
        editedWebhook: A,
        selectableWebhookChannels: v,
        lastCreatedWebhookId: null == C ? true : C.id,
        errors: E,
        canNavigate: T
      })]
    }) : (t = (0, l.Mw)(w) ? h : x, (0, i.jsxs)(u.A, {
      direction: u.A.Direction.VERTICAL,
      align: u.A.Align.CENTER,
      children: [(0, i.jsx)("img", {
        alt: "",
        src: t,
        className: g.QT
      }), (0, i.jsx)(a.Heading, {
        variant: "heading-md/semibold",
        children: m.intl.string(m.t.LzmsWl)
      }), (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: g.nM,
        children: (0, i.jsx)(a.Button, {
          variant: "primary",
          text: m.intl.string(m.t.lOQqJK),
          disabled: !k,
          onClick: P
        })
      })]
    }))]
  })
}