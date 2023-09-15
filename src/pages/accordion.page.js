import Accordion from "../components/accordion.component";

function AccordionPage() {
  const items = [
    {
      id: "liiwhi19",
      label: "Can I use React on a Project",
      content: "You can use react on any project you want.",
    },
    {
      id: "dhwiwhi19",
      label: "Can I use Javascript on a Project",
      content: "You can use Javascript on any project you want.",
    },
    {
      id: "liso2219",
      label: "Can I use CSS on a Project",
      content: "You can use CSS on any project you want.",
    },
  ];
  return <Accordion items={items} />;
}
export default AccordionPage;
