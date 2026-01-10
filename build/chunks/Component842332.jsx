/** Chunk was on 81985 **/
/** chunk id: 842332, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => f
}), require("./388685.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk544891 = require("./544891.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk39952 = require("./39952.js"),
  Chunk375954 = require("./375954.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
async function p(e) {
  try {
    var t, n;
    let r = await l.tn.post({
      url: u.ANM.AI_TITLE,
      body: {
        content: e
      },
      oldFormErrors: true,
      rejectWithError: false
    });
    return r.ok && null != (n = null == (t = r.body) ? true : t.title) ? n : null
  } catch (e) {
    return null
  }
}

function f(e) {
  let {
    parentChannel: t,
    parentMessageId: n,
    updateThreadSettings: l,
    threadSettings: u,
    textAreaState: f
  } = e, [h, g] = i.useState(false), [m, b] = i.useState(false), y = (0, s.o)(), v = i.useCallback(async () => {
    if (y) {
      g(true);
      try {
        let r = null;
        if (null != n) {
          var e;
          let i = c.Z.getMessage(t.id, n);
          r = null != (e = null == i ? true : i.content) ? e : null
        } else f.textValue.trim().length >= 10 && (r = f.textValue);
        if (null != r) {
          let e = await p(r);
          null != e && "" !== e.trim() && l({
            name: e
          })
        }
      } finally {
        g(false)
      }
    }
  }, [t.id, n, l, y, f.textValue]);
  i.useEffect(() => {
    b(false), g(false), t.id === u.parentChannelId && n !== u.parentMessageId && l({
      name: ""
    })
  }, [n, l, t.id, u.parentChannelId, u.parentMessageId]), i.useEffect(() => {
    (null == u.name || "" === u.name.trim()) && !m && y && null != n && (b(true), v())
  }, [t.id, n, l, u.name, m, y, v]);
  let O = i.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
      if (y) return {
        icon: o.$2U,
        onClick: v,
        "aria-label": d.intl.string(d.t.ZF2oBs),
        disabled: e || h || null == n && f.textValue.trim().length < 10,
        tooltip: d.intl.string(d.t.ZF2oBs),
        loading: h
      }
    }, [y, v, h, n, f.textValue]),
    j = i.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
      return y ? (0, r.jsx)(a.u, {
        text: d.intl.string(d.t.ZF2oBs),
        children: (0, r.jsx)(o.hU, {
          icon: o.$2U,
          variant: "secondary",
          size: "sm",
          "aria-label": d.intl.string(d.t.ZF2oBs),
          onClick: v,
          disabled: e || h || null == n && f.textValue.trim().length < 10,
          loading: h,
          type: "button"
        })
      }) : null
    }, [y, h, n, f.textValue, v]);
  return {
    isGeneratingAI: h,
    generateAIName: v,
    enableAIFeatures: y,
    renderAiGenerateButton: j,
    getThreadNameInputAccessory: O
  }
}