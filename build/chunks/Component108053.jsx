/** Chunk was on 13616 **/
/** chunk id: 108053, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk308063 = require("./308063.js"),
  Chunk493773 = require("./493773.js"),
  Chunk410030 = require("./410030.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk725875 = require("./725875.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk14119 = require("./14119.js"),
  Chunk893916 = require("./893916.js"),
  Chunk408942 = require("./408942.js");

function j(e) {
  let t, {
      guild: n,
      channel: j,
      customWebhooks: v,
      editedWebhook: O,
      selectableWebhookChannels: y,
      refToScroller: _,
      errors: C,
      canNavigate: N
    } = e,
    S = (0, d.ZP)(),
    [I, w] = r.useState(null),
    [Z, E] = r.useState(null);
  if (null != j) t = j;
  else {
    let e = Object.values(y);
    t = e.length > 0 ? e[0] : null
  }
  let P = r.useCallback(async () => {
    if (N() && null !== t) {
      let e = await s.Z.create(n.id, t.id).catch(e => {
        let {
          body: t,
          status: n
        } = e;
        return t && t.code === b.evJ.TOO_MANY_WEBHOOKS ? a.Z.show({
          title: g.intl.string(g.t.cCqscX),
          body: g.intl.string(g.t["w+QZoa"])
        }) : 429 === n ? a.Z.show({
          title: g.intl.string(g.t.cCqscX),
          body: g.intl.string(g.t["YBM+UV"])
        }) : a.Z.show({
          title: g.intl.string(g.t.cCqscX),
          body: g.intl.string(g.t["/4TwKS"])
        }), null
      });
      null != e && (E(e.id), w(e))
    }
  }, [N, t, n]);
  (0, c.ZP)(() => {
    0 === v.length && P()
  });
  let T = null !== t;
  return (0, i.jsxs)(o.hjN, {
    children: [(0, i.jsx)(o.R94, {
      type: o.geA.DESCRIPTION,
      children: g.intl.format(g.t.WL0d0d, {
        helpdeskArticle: p.Z.getArticleURL(b.BhN.WEBHOOKS),
        developersArticle: b.EYA.API_DOCS_WEBHOOKS
      })
    }), (0, i.jsx)(o.$i$, {
      className: f.headerDivider
    }), v.length > 0 ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: f.createButton,
        children: (0, i.jsx)(o.zxk, {
          variant: "primary",
          size: "sm",
          text: g.intl.string(g.t["nrO/HB"]),
          disabled: !T,
          onClick: P
        })
      }), (0, i.jsx)(m.Z, {
        webhooks: v,
        editedWebhook: O,
        selectableWebhookChannels: y,
        lastCreatedWebhookId: null == I ? true : I.id,
        errors: C,
        canNavigate: N
      })]
    }) : function(e, t, n) {
      let r = (0, l.wj)(e) ? h : x;
      return (0, i.jsxs)(u.Z, {
        direction: u.Z.Direction.VERTICAL,
        align: u.Z.Align.CENTER,
        children: [(0, i.jsx)("img", {
          alt: "",
          src: r,
          className: f.emptyStateImage
        }), (0, i.jsx)(o.X6q, {
          variant: "heading-md/semibold",
          children: g.intl.string(g.t.LzmsWl)
        }), (0, i.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: f.emptyStateButton,
          children: (0, i.jsx)(o.zxk, {
            variant: "primary",
            text: g.intl.string(g.t.lOQqJC),
            disabled: !t,
            onClick: n
          })
        })]
      })
    }(S, T, P)]
  })
}