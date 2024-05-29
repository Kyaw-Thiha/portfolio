import * as React from "react";
// import { LoremIpsum } from "react-lorem-ipsum";
import { motion } from "framer-motion";
// import parse from "html-react-parser";

interface Props {
    text: string;
}
export const Text = React.memo(({ text }: Props) => {
    return (
        // <motion.div className="mb-40 text-white" style={{ originY: 0, originX: 0 }}>

        <motion.div className="mb-20 mx-4 md:mx-20 text-white" layout>
            <div
                className="project-detail"
                dangerouslySetInnerHTML={{ __html: text }}
            />
            {/* {parse(text)} */}
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Dignissim enim sit
      amet venenatis urna cursus eget nunc. Pellentesque pulvinar pellentesqu
      habitant morbi tristique senectus et netus. Sit amet volutpat consequat
      mauris. Hac habitasse platea dictumst quisque sagittis. Elementum eu
      facilisis sed odio morbi quis. Integer eget aliquet nibh praesent
      tristique magna sit amet purus. Rutrum tellus pellentesque eu tincidunt
      tortor aliquam nulla facilisi cras. Risus ultricies tristique nulla
      aliquet enim tortor at auctor urna. Scelerisque purus semper eget duis at
      tellus at. Semper risus in hendrerit gravida rutrum quisque. Est velit
      egestas dui id ornare arcu odio. Penatibus et magnis dis parturient montes
      nascetur. Turpis egestas integer eget aliquet nibh praesent tristique
      magna. Congue nisi vitae suscipit tellus mauris a diam. Adipiscing elit
      duis tristique sollicitudin nibh sit amet. Viverra adipiscing at in tellus
      integer feugiat scelerisque varius. Sollicitudin aliquam ultrices sagittis
      orci a scelerisque purus semper. Scelerisque eleifend donec pretium
      vulputate sapien. Fermentum posuere urna nec tincidunt praesent semper.
      Sociis natoque penatibus et magnis dis parturient. Enim sed faucibus
      turpis in eu mi bibendum. Ultricies mi quis hendrerit dolor magna eget
      est. Nisi porta lorem mollis aliquam. Leo a diam sollicitudin tempor id.
      Eu mi bibendum neque egestas congue quisque egestas. Sem et tortor
      consequat id porta nibh venenatis cras sed. Accumsan in nisl nisi
      scelerisque eu ultrices vitae auctor. Netus et malesuada fames ac turpis
      egestas sed. Habitant morbi tristique senectus et. Eleifend quam
      adipiscing vitae proin sagittis. Elit sed vulputate mi sit amet mauris
      commodo. Varius morbi enim nunc faucibus a. Quis varius quam quisque id.
      Quis vel eros donec ac odio tempor orci. Eu scelerisque felis imperdiet
      proin fermentum leo vel orci. Id faucibus nisl tincidunt eget nullam non
      nisi est. Bibendum neque egestas congue quisque egestas diam in. Vitae
      purus faucibus ornare suspendisse sed nisi. Odio pellentesque diam
      volutpat commodo sed egestas egestas fringilla phasellus. Interdum velit
      euismod in pellentesque massa placerat duis. Vel elit scelerisque mauris
      pellentesque pulvinar pellentesque habitant. Molestie at elementum eu
      facilisis sed odio morbi. Eu feugiat pretium nibh ipsum consequat nisl
      vel. Dignissim sodales ut eu sem integer vitae. Sagittis id consectetur
      purus ut faucibus. Non sodales neque sodales ut etiam. Morbi tristique
      senectus et netus et malesuada fames ac turpis. Egestas egestas fringilla
      phasellus faucibus scelerisque eleifend. Egestas sed tempus urna et
      pharetra pharetra massa massa. Arcu non odio euismod lacinia at. Faucibus
      in ornare quam viverra orci sagittis. Quis auctor elit sed vulputate. Quis
      enim lobortis scelerisque fermentum. Mattis vulputate enim nulla aliquet
      porttitor lacus luctus accumsan tortor. Fames ac turpis egestas sed
      tempus. Porttitor leo a diam sollicitudin tempor id. Sed velit dignissim
      sodales ut eu sem integer vitae. A cras semper auctor neque vitae tempus
      quam. Aliquam etiam erat velit scelerisque in dictum non. Vehicula ipsum a
      arcu cursus vitae. Viverra nam libero justo laoreet sit amet cursus sit.
      Placerat in egestas erat imperdiet sed euismod nisi. Eget felis eget nunc
      lobortis mattis aliquam faucibus. Nec feugiat in fermentum posuere urna
      nec tincidunt. Vitae sapien pellentesque habitant morbi tristique. Diam
      sit amet nisl suscipit adipiscing bibendum est. In pellentesque massa
      placerat duis. Tellus elementum sagittis vitae et. */}
        </motion.div>
    );
});

Text.displayName = "CardText";
