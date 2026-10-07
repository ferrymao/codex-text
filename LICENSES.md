# 数据来源与许可

本项目按用户要求仅用于个人非商用学习。具体 URL、作者、采集时间见 `public/SOURCES.md`、`public/source-records.json`、`public/SOURCES.sample.md` 和原始缓存。

| 来源 | 实际使用内容 | 许可与署名 |
| --- | --- | --- |
| [Wiktionnaire](https://fr.wiktionary.org/wiki/Wiktionnaire%3ALicence) | 原形、词性、常用释义、词源、读音与词形核对 | CC BY-SA 4.0；署名 Wiktionnaire contributors，词条永久版本及历史页记录作者；整理、翻译与改写保留来源并遵循相同许可。 |
| [Tatoeba](https://tatoeba.org/en/downloads) | 真实法语例句 | 本批逐句核实为 CC BY 2.0 FR；保留句子 URL 与作者，中文译文标明项目整理。其他许可的候选句未进入本批。 |
| [Lexique 3.83 官方发行 README](https://www.lexique.org/databases/Lexique383/README-Lexique.txt) | lemma、词性、阴阳性与频率；本项目自行派生排名 | Boris New、Christophe Pallier、Ronald Peereman、Sophie Dufour、Christian Lachaud 等贡献者；版本具体的发行目录 README 与官方 ZIP 内 README 均明确指向 CC BY-SA 4.0 文件名。数据改编保留署名、来源与相同许可。本项目仅用于非商用学习。 |

许可正文：[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/legalcode)、[CC BY 2.0 FR](https://creativecommons.org/licenses/by/2.0/fr/legalcode)。

Lexique 3.83 的显示文字把 SA4.0 写为 SA40.0，链接文件名为 `LICENSE-CC-BY-SA4.0.txt`，链接目前 404；同一版本包内声明与发行目录声明一致。当前首页介绍 Lexique 4，许可链接实际指向 BY-NC 而标签写 BY-SA；较早 PDF 手册有 GPL 表述。本项目使用 3.83 两份版本具体发行声明作为依据，证据原文、时间和 SHA256 保存在 `scripts/data/lexique-selected.json`。这里没有把 CC BY-SA 的通用条款说成禁止商用，个人非商用是用户指定的项目用途。

Lexique 学术署名：New, B., Pallier, C., Brysbaert, M., & Ferrand, L. (2004). Lexique 2: A New French Lexical Database. *Behavior Research Methods, Instruments, & Computers*, 36(3), 516–524。

Lefff/DELAF 未使用。词性由 Lexique 与 Wiktionnaire 交叉核对；例句高亮仅保守匹配已提供的词头与基本词尾，不推断任意变位。没有把其他来源伪装为上述来源。

未采用教材、DELF 真题词表、付费词典或其他未授权内容。依赖库的许可证随各 npm 包保留在 node_modules 中，本文件只说明语料。

