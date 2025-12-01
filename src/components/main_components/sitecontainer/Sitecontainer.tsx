// in this component I'll build out the site container code

import "./sitecontainer.scss";

// capital letter cause in the main we put it in

function Sitecontainer({
  children,
}: {
  children?: React.ReactNode;
  pagename?: string; // add this
}) {
  return (
    // so using the fragment is only necessary when theres more than one element really

    <div className="sitecontainer">
      {children}
      {/* renders whatever is inside <SiteContainer>…</SiteContainer> */}
    </div>
  );
}

export default Sitecontainer;
