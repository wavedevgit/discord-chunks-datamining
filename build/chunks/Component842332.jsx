/** Chunk was on 91053 **/
/** chunk id: 842332, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => p
}), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk544891 = require("./544891.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk466721 = require("./466721.js"),
  Chunk375954 = require("./375954.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
async function h(e) {
  try {
    var t, n;
    let r = await l.tn.post({
      url: d.ANM.AI_TITLE,
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

function p(e) {
  let {
    parentChannel: t,
    parentMessageId: n,
    updateThreadSettings: l,
    threadSettings: d,
    textAreaState: p
  } = e, [f, g] = i.useState(false), [m, b] = i.useState(false), {
    enableAIFeatures: y
  } = o.C.useExperiment({
    location: "CreateThreadSidebar"
  }), _ = i.useCallback(async () => {
    if (y) {
      g(true);
      try {
        let r = null;
        if (null != n) {
          var e;
          let i = c.Z.getMessage(t.id, n);
          r = null != (e = null == i ? true : i.content) ? e : null
        } else p.textValue.trim().length >= 10 && (r = p.textValue);
        if (null != r) {
          let e = await h(r);
          null != e && "" !== e.trim() && l({
            name: e
          })
        }
      } finally {
        g(false)
      }
    }
  }, [t.id, n, l, y, p.textValue]);
  i.useEffect(() => {
    b(false), g(false), t.id === d.parentChannelId && n !== d.parentMessageId && l({
      name: ""
    })
  }, [n, l, t.id, d.parentChannelId, d.parentMessageId]), i.useEffect(() => {
    (null == d.name || "" === d.name.trim()) && !m && y && null != n && (b(true), _())
  }, [t.id, n, l, d.name, m, y, _]);
  let j = i.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
      if (y) return {
        icon: s.$2U,
        onClick: _,
        "aria-label": u.intl.string(u.t.ZF2oBg),
        disabled: e || f || null == n && p.textValue.trim().length < 10,
        tooltip: u.intl.string(u.t.ZF2oBg),
        loading: f
      }
    }, [y, _, f, n, p.textValue]),
    O = i.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
      return y ? (0, r.jsx)(a.u, {
        text: u.intl.string(u.t.ZF2oBg),
        children: (0, r.jsx)(s.hU, {
          icon: s.$2U,
          variant: "secondary",
          size: "sm",
          "aria-label": u.intl.string(u.t.ZF2oBg),
          onClick: _,
          disabled: e || f || null == n && p.textValue.trim().length < 10,
          loading: f,
          type: "button"
        })
      }) : null
    }, [y, f, n, p.textValue, _]);
  return {
    isGeneratingAI: f,
    generateAIName: _,
    enableAIFeatures: y,
    renderAiGenerateButton: O,
    getThreadNameInputAccessory: j
  }
}