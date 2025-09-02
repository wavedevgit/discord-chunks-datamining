/** Chunk was on web.js **/
/** chunk id: 292419, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  SD: () => m,
  cd: () => v,
  kS: () => E,
  np: () => O,
  uZ: () => S
}), require("./388685.js"), require("./953529.js");
var Chunk866442 = require("./866442.js"),
  Chunk911969 = require("./911969.js"),
  Chunk710845 = require("./710845.js"),
  Chunk622449 = require("./622449.js"),
  Chunk768494 = require("./768494.js"),
  Chunk768581 = require("./768581.js"),
  Chunk823379 = require("./823379.js"),
  Chunk280501 = require("./280501.js"),
  Chunk790642 = require("./790642.js"),
  Chunk388032 = require("./388032.jsx");
let _ = new Chunk710845.Z("InteractionComponentUtils"),
  p = (e, t) => ({
    id: e.id,
    name: e.name,
    animated: e.animated,
    src: t && null != e.id ? l.ZP.getEmojiURL({
      id: e.id,
      animated: e.animated || false,
      size: 48
    }) : true
  }),
  h = e => (null == e ? true : e.errorCode) === 429 ? f.intl.string(f.t.fitPBQ) : f.intl.string(f.t.VCsUJi),
  m = (e, t, n) => {
    let r = (null == e ? true : e.data.interactionType) === i.B8.MESSAGE_COMPONENT && (null == e ? true : e.state) === o.F.FAILED ? e.data.componentId : null;
    if (null != (null != r ? y(n, r) : null)) {
      var a;
      return null != (a = null == t ? true : t.interactionError) ? a : h(e)
    }
  },
  g = e => {
    switch (e) {
      case i.re.ACTION_ROW:
      case i.re.BUTTON:
      case i.re.STRING_SELECT:
      case i.re.TEXT_INPUT:
      case i.re.USER_SELECT:
      case i.re.ROLE_SELECT:
      case i.re.MENTIONABLE_SELECT:
      case i.re.CHANNEL_SELECT:
      case i.re.SECTION:
      case i.re.TEXT_DISPLAY:
      case i.re.THUMBNAIL:
      case i.re.MEDIA_GALLERY:
      case i.re.FILE:
      case i.re.SEPARATOR:
      case i.re.CONTAINER:
      case i.re.LABEL:
        returntrue;
      case i.re.CONTENT_INVENTORY_ENTRY:
        return (0, d.Io)("canShowComponent")
    }
  };

function E(e) {
  let t = new Map;
  for (let n of e) b(t, n);
  return t
}

function b(e, t) {
  switch (e.set(t.id, t), t.type) {
    case i.re.ACTION_ROW:
      t.components.forEach(t => b(e, t));
      break;
    case i.re.SECTION:
      t.components.forEach(t => b(e, t)), b(e, t.accessory);
      break;
    case i.re.CONTAINER:
      t.components.forEach(t => b(e, t))
  }
}

function y(e, t) {
  var n, r, a;
  switch (e.type) {
    case i.re.ACTION_ROW:
      return null != (n = e.components.find(e => e.id === t)) ? n : null;
    case i.re.SECTION:
      if (e.accessory.id === t) return e.accessory;
      return null != (r = e.components.find(e => e.id === t)) ? r : null;
    case i.re.CONTAINER:
      return null != (a = e.components.find(e => e.id === t)) ? a : null
  }
}

function O(e) {
  let t = Array.from(E(e).values()).filter(e => e.type === i.re.TEXT_DISPLAY).map(e => e.content).join("\n");
  return "" !== t ? t : null
}

function v(e, t) {
  function n(e) {
    let r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : [];
    for (let i of e) {
      let e = I(i);
      if (e.some(e => e.id === t.id)) return [i, ...r];
      let a = n(e, [i, ...r]);
      if (null != a) return a
    }
    return null
  }
  return n(e)
}

function I(e) {
  switch (e.type) {
    case i.re.ACTION_ROW:
      return e.components;
    case i.re.SECTION:
      return [...e.components, e.accessory];
    case i.re.CONTAINER:
      return e.components;
    case i.re.LABEL:
      return [e.component];
    case i.re.BUTTON:
    case i.re.STRING_SELECT:
    case i.re.TEXT_INPUT:
    case i.re.USER_SELECT:
    case i.re.ROLE_SELECT:
    case i.re.MENTIONABLE_SELECT:
    case i.re.CHANNEL_SELECT:
    case i.re.TEXT_DISPLAY:
    case i.re.THUMBNAIL:
    case i.re.MEDIA_GALLERY:
    case i.re.FILE:
    case i.re.SEPARATOR:
    case i.re.CONTENT_INVENTORY_ENTRY:
      return [];
    default:
      return _.warn("getComponentChildren: Unknown component type", e.type), []
  }
}

function S(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  return e.map((e, n) => T(e, t, [n])).filter(e => null != e)
}

function T(e, t, n) {
  var a, o, l, d, h, m, E, b, y, O, v, I, S;
  if (!g(e.type)) return null;

  function C(e, r) {
    let i = T(e, t, [...n, r]);
    return null == i ? null : i
  }
  let {
    includeEmojiSrc: N
  } = t;
  switch (e.type) {
    case i.re.ACTION_ROW: {
      let t = e.components.map((e, t) => C(e, t)).filter(c.lm);
      return {
        type: i.re.ACTION_ROW,
        id: A(n),
        components: t
      }
    }
    case i.re.BUTTON: {
      let t = null != e.emoji ? p(e.emoji, N) : true;
      return {
        type: i.re.BUTTON,
        id: A(n),
        customId: e.custom_id,
        style: e.style,
        disabled: e.disabled,
        url: e.url,
        label: e.label,
        emoji: t,
        skuId: e.sku_id
      }
    }
    case i.re.STRING_SELECT:
      return {
        type: i.re.STRING_SELECT, id: A(n), customId: e.custom_id, disabled: e.disabled, required: null != (a = e.required) && a, options: e.options.map(e => ({
          type: u.tM.STRING,
          label: e.label,
          value: e.value,
          default: e.default,
          description: e.description,
          emoji: null != e.emoji ? p(e.emoji, N) : true
        })), placeholder: null != (o = e.placeholder) ? o : f.intl.string(f.t.Otr6W1), minValues: e.min_values, maxValues: e.max_values
      };
    case i.re.TEXT_INPUT:
      return {
        type: e.type, id: A(n), style: e.style, customId: e.custom_id, label: e.label, value: e.value, placeholder: e.placeholder, disabled: e.disabled, required: null != (l = e.required) && l, minLength: e.min_length, maxLength: e.max_length
      };
    case i.re.USER_SELECT:
      return {
        type: i.re.USER_SELECT, id: A(n), customId: e.custom_id, disabled: e.disabled, required: null != (d = e.required) && d, placeholder: null != (h = e.placeholder) ? h : f.intl.string(f.t.Otr6W1), minValues: e.min_values, maxValues: e.max_values, defaultValues: e.default_values
      };
    case i.re.ROLE_SELECT:
      return {
        type: i.re.ROLE_SELECT, id: A(n), customId: e.custom_id, disabled: e.disabled, required: null != (m = e.required) && m, placeholder: null != (E = e.placeholder) ? E : f.intl.string(f.t.Otr6W1), minValues: e.min_values, maxValues: e.max_values, defaultValues: e.default_values
      };
    case i.re.MENTIONABLE_SELECT:
      return {
        type: i.re.MENTIONABLE_SELECT, id: A(n), customId: e.custom_id, disabled: e.disabled, required: null != (b = e.required) && b, placeholder: null != (y = e.placeholder) ? y : f.intl.string(f.t.Otr6W1), minValues: e.min_values, maxValues: e.max_values, defaultValues: e.default_values
      };
    case i.re.CHANNEL_SELECT:
      return {
        type: i.re.CHANNEL_SELECT, id: A(n), customId: e.custom_id, disabled: e.disabled, required: null != (O = e.required) && O, placeholder: null != (v = e.placeholder) ? v : f.intl.string(f.t.Otr6W1), minValues: e.min_values, maxValues: e.max_values, channelTypes: e.channel_types, defaultValues: e.default_values
      };
    case i.re.SECTION: {
      let t = e.components.map((e, t) => C(e, t)).filter(c.lm),
        r = C(e.accessory, t.length);
      if (0 === t.length || null == r) return null;
      return {
        type: i.re.SECTION,
        id: A(n),
        components: t,
        accessory: r
      }
    }
    case i.re.TEXT_DISPLAY:
      return {
        type: i.re.TEXT_DISPLAY, id: A(n), content: e.content
      };
    case i.re.THUMBNAIL:
      return {
        type: i.re.THUMBNAIL, id: A(n), media: (0, s.ym)(e.media), description: e.description, spoiler: e.spoiler
      };
    case i.re.MEDIA_GALLERY:
      return {
        type: i.re.MEDIA_GALLERY, id: A(n), items: e.items.map(e => ({
          media: (0, s.ym)(e.media),
          description: e.description,
          spoiler: e.spoiler
        }))
      };
    case i.re.FILE:
      return {
        type: i.re.FILE, id: A(n), file: (0, s.ym)(e.file), name: e.name, size: e.size, spoiler: e.spoiler
      };
    case i.re.SEPARATOR:
      return {
        type: i.re.SEPARATOR, id: A(n), divider: null == (I = e.divider) || I, spacing: null != (S = e.spacing) ? S : i.US.SMALL
      };
    case i.re.CONTENT_INVENTORY_ENTRY:
      if (null == e.content_inventory_entry) return null;
      return {
        type: i.re.CONTENT_INVENTORY_ENTRY, id: A(n), contentInventoryEntry: e.content_inventory_entry
      };
    case i.re.CONTAINER: {
      let t = e.components.map((e, t) => C(e, t)).filter(c.lm);
      return {
        type: i.re.CONTAINER,
        id: A(n),
        accentColor: null != e.accent_color ? (0, r.ho)(e.accent_color, true) : true,
        spoiler: e.spoiler,
        components: t
      }
    }
    case i.re.LABEL: {
      let t = C(e.component, 0);
      if (null == t) return null;
      return {
        type: i.re.LABEL,
        id: A(n),
        label: e.label,
        description: e.description,
        component: t
      }
    }
    default:
      return _.warn("transformComponent: Unknown component type", e.type), null
  }
}

function A(e) {
  return (0, u.FF)(e.join(","))
}