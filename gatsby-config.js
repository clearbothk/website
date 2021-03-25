module.exports = {
  siteMetadata: {
    title: `Clearbot`,
    description: `A autonomous swarm robotics system to clean our oceans`,
    author: `@utkarsh867`,
    siteUrl: "https://www.clearbot.dev/",
    taco: [
      "Animal carcass",
      "Bag, medicine/pills",
      "Bag, netting",
      "Bag, other ",
      "Bag, paper",
      "Bag, thin plastic, grocery, with handles",
      "Bag, plastic other",
      "Balloons",
      "Bandage, single-use",
      "Battery, car, boat, etc",
      "Battery, home use",
      "Bottle cap, metal",
      "Bottle cap, plastic",
      "Bottle neck ring, plastic",
      "Bottle pump dispenser",
      "Bottle, glass beverage",
      "Bottle, glass other",
      "Bottle, plastic beverage",
      "Bottle, plastic label",
      "Bottle, plastic medicine",
      "Bottle, plastic, body care",
      "Bottle, plastic, other",
      "Bucket, plastic",
      "Cables, plastic",
      "Cable ties",
      "Can, aerosol",
      "Can, metal, drink",
      "Can, metal, food",
      "Ceramic, fragment",
      "Chair / stool",
      "Children's floor mat",
      "Chopstick, wood",
      "Cigarette box",
      "Cigarette butt",
      "Cigarette lighter",
      "Clothes peg plastic",
      "Condom",
      "Container, plastic, reuseable (Tupperware)",
      "Cotton bud stick",
      "Cup, not disposable",
      "Cup, plastic, disposable",
      "Electronics",
      "Eye glasses",
      "Fish",
      "Fishing bouy",
      "Fishing net",
      "Fishing net float",
      "Fishing other",
      "Fluorescent tube ",
      "Foil",
      "Fork, plastic disposable (cutlery)",
      "Glass, fragment",
      "Glass, other",
      "Gloves, cotton",
      "Gloves, plastic",
      "Hair brush, other",
      "Hair brush, plastic",
      "Hair comb, other",
      "Hair comb, plastic",
      "Helmet",
      "Jar, glass, food",
      "Jar, glass, other",
      "Jellyfish",
      "Lid, plastic jar",
      "Life ring",
      "Light bulb",
      "Liquid cartons (Tetra Pak)",
      "Lollipop stick (has hole at one end)",
      "Mask, disposable",
      "Medical, other",
      "Medicine, blister package (for pills)",
      "Metal canister",
      "Metal lid",
      "Metal, other",
      "Oil drum",
      "Other",
      "Packaging, plastic, hard, body care (non bottle/tube)",
      "Packaging, plastic, hard, food (non bottle/tube)",
      "Packaging, plastic, hard, other (non bottle/tube)",
      "Packaging, plastic, ice lolly",
      "Packaging, plastic, wrapper, food",
      "Packaging, plastic, wrapper, fragment",
      "Packaging, plastic, wrapper, other",
      "Packaging, polyfoam fruit net",
      "Packaging, tube, bodycare product",
      "Packaging, tube, food",
      "Packaging, tube, other",
      "Packaging, tube, toothpaste",
      "Paper, cardboard",
      "Paper, laminated",
      "Paper, newspaper",
      "Paper, other",
      "Paper, sheet",
      "Plastic cable",
      "Plastic fibers (unidentifiable)",
      "Plastic strapping",
      "Plastic, hard, fragment",
      "Plastic, hard, other",
      "Plate, plastic",
      "Polystyrene (styrofoam) 'fish' box ",
      "Polystyrene (styrofoam) fragment",
      "Polystyrene (styrofoam) packing 'peanuts'",
      "Pouch, food",
      "Pouch, non food",
      "Rope",
      "Shipping tag, plastic",
      "Shoes, flip flop",
      "Shoes, other",
      "Shoes, running",
      "Shoes, sole",
      "Six pack ring",
      "Spoon, non disposable (cutlery)",
      "Spoon, plastic disposable (cutlery)",
      "Squid",
      "Stationery, other",
      "Stationery, Pen/ pencil/ marker",
      "Stir stick, plastic ",
      "Straw, plastic",
      "String",
      "Surfboard",
      "Syringe ",
      "Takeaway, non plastic food container",
      "Takeaway, non plastic food container lid",
      "Takeaway, plastic food container",
      "Takeaway, plastic food container lid",
      "Takeaway, polystyrene (styrofoam) bowl",
      "Takeaway, polystyrene (styrofoam) cup",
      "Takeaway, polystyrene (styrofoam) lid",
      "Takeaway, polystyrene (styrofoam) lunch box",
      "Textiles, clothing",
      "Textiles, other",
      "Tissue package, small",
      "Tissues",
      "Toothbrush, plastic",
      "Toys, plastic beach",
      "Toys, ball",
      "Toys, balloon",
      "Toys, glowstick",
      "Toys, lego",
      "Toys, other",
      "Toys, plastic figure",
      "Tube, plastic",
      "Tyre",
      "Wet wipe",
      "Wire",
    ],
  },
  proxy: [
    {
      prefix: "/api", // TODO: Fix proxy issue in production
      url: "http://localhost:7071",
    },
  ],
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Clearbot`,
        short_name: `Clearbot`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#005c66`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins\:300,400,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [isResettingCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        isResettingCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: false,
      },
    },
    "gatsby-plugin-cname",
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: "UA-162905496-1",
      },
    },
  ],
}
