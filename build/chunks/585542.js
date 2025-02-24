/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
function t(e) {
  let t = e.regex,
    n = e.COMMENT("//", "$", {
      contains: [{
        begin: /\\\n/
      }]
    }),
    r = "decltype\\(auto\\)",
    i = "[a-zA-Z_]\\w*::",
    o = "<[^<>]+>",
    a = "(" + r + "|" + t.optional(i) + "[a-zA-Z_]\\w*" + t.optional(o) + ")",
    s = {
      className: "type",
      variants: [{
        begin: "\\b[a-z\\d_]*_t\\b"
      }, {
        match: /\batomic_[a-z]{3,6}\b/
      }]
    },
    l = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",
    c = {
      className: "string",
      variants: [{
        begin: '(u8?|U|L)?"',
        end: '"',
        illegal: "\\n",
        contains: [e.BACKSLASH_ESCAPE]
      }, {
        begin: "(u8?|U|L)?'(" + l + "|.)",
        end: "'",
        illegal: "."
      }, e.END_SAME_AS_BEGIN({
        begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
        end: /\)([^()\\ ]{0,16})"/
      })]
    },
    u = {
      className: "number",
      variants: [{
        match: /\b(0b[01']+)/
      }, {
        match: /(-?)\b([\d']+(\.[\d']*)?|\.[\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)/
      }, {
        match: /(-?)\b(0[xX][a-fA-F0-9]+(?:'[a-fA-F0-9]+)*(?:\.[a-fA-F0-9]*(?:'[a-fA-F0-9]*)*)?(?:[pP][-+]?[0-9]+)?(l|L)?(u|U)?)/
      }, {
        match: /(-?)\b\d+(?:'\d+)*(?:\.\d*(?:'\d*)*)?(?:[eE][-+]?\d+)?/
      }],
      relevance: 0
    },
    d = {
      className: "meta",
      begin: /#\s*[a-z]+\b/,
      end: /$/,
      keywords: {
        keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef elifdef elifndef include"
      },
      contains: [{
        begin: /\\\n/,
        relevance: 0
      }, e.inherit(c, {
        className: "string"
      }), {
        className: "string",
        begin: /<.*?>/
      }, n, e.C_BLOCK_COMMENT_MODE]
    },
    f = {
      className: "title",
      begin: t.optional(i) + e.IDENT_RE,
      relevance: 0
    },
    p = t.optional(i) + e.IDENT_RE + "\\s*\\(",
    _ = {
      keyword: ["asm", "auto", "break", "case", "continue", "default", "do", "else", "enum", "extern", "for", "fortran", "goto", "if", "inline", "register", "restrict", "return", "sizeof", "typeof", "typeof_unqual", "struct", "switch", "typedef", "union", "volatile", "while", "_Alignas", "_Alignof", "_Atomic", "_Generic", "_Noreturn", "_Static_assert", "_Thread_local", "alignas", "alignof", "noreturn", "static_assert", "thread_local", "_Pragma"],
      type: ["float", "double", "signed", "unsigned", "int", "short", "long", "char", "void", "_Bool", "_BitInt", "_Complex", "_Imaginary", "_Decimal32", "_Decimal64", "_Decimal96", "_Decimal128", "_Decimal64x", "_Decimal128x", "_Float16", "_Float32", "_Float64", "_Float128", "_Float32x", "_Float64x", "_Float128x", "const", "static", "constexpr", "complex", "bool", "imaginary"],
      literal: "true false NULL",
      built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
    },
    h = [d, s, n, e.C_BLOCK_COMMENT_MODE, u, c],
    m = {
      variants: [{
        begin: /=/,
        end: /;/
      }, {
        begin: /\(/,
        end: /\)/
      }, {
        beginKeywords: "new throw return else",
        end: /;/
      }],
      keywords: _,
      contains: h.concat([{
        begin: /\(/,
        end: /\)/,
        keywords: _,
        contains: h.concat(["self"]),
        relevance: 0
      }]),
      relevance: 0
    },
    g = {
      begin: "(" + a + "[\\*&\\s]+)+" + p,
      returnBegin: !0,
      end: /[{;=]/,
      excludeEnd: !0,
      keywords: _,
      illegal: /[^\w\s\*&:<>.]/,
      contains: [{
        begin: r,
        keywords: _,
        relevance: 0
      }, {
        begin: p,
        returnBegin: !0,
        contains: [e.inherit(f, {
          className: "title.function"
        })],
        relevance: 0
      }, {
        relevance: 0,
        match: /,/
      }, {
        className: "params",
        begin: /\(/,
        end: /\)/,
        keywords: _,
        relevance: 0,
        contains: [n, e.C_BLOCK_COMMENT_MODE, c, u, s, {
          begin: /\(/,
          end: /\)/,
          keywords: _,
          relevance: 0,
          contains: ["self", n, e.C_BLOCK_COMMENT_MODE, c, u, s]
        }]
      }, s, n, e.C_BLOCK_COMMENT_MODE, d]
    };
  return {
    name: "C",
    aliases: ["h"],
    keywords: _,
    disableAutodetect: !0,
    illegal: "</",
    contains: [].concat(m, g, h, [d, {
      begin: e.IDENT_RE + "::",
      keywords: _
    }, {
      className: "class",
      beginKeywords: "enum class struct union",
      end: /[{;:<>=]/,
      contains: [{
        beginKeywords: "final class struct"
      }, e.TITLE_MODE]
    }]),
    exports: {
      preprocessor: d,
      strings: c,
      keywords: _
    }
  }
}
e.exports = t