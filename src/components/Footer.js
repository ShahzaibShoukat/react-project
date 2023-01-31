const Footer = () => {
    return (
        <footer className="footer">
          <div className="container py-3 px-1">
            <div className="footer-grid jc-center">
              <img alt="footer-logo"src="/logo-footer.png" width="auto" height="100px"></img>
              <div>
                <p>Navigation</p>
                <ul>
                  <li>Home</li>
                  <li>Policy</li>
                  <li>Hiring</li>
                  <li>Complains</li>
                </ul>
              </div>
              <div>
                <p>Contact Us</p>
                <ul>
                  <li>Address:</li>
                  <li>Phone:</li>
                  <li>Email:</li>
                </ul>
              </div>
              <div>
                <p>Contact Us</p>
                <span><img alt="facebook-icon" src="/facebook.png" width="50px" height="auto"></img></span>
                <span><img alt="instagram-icon" src="/instagram.png" width="50px" height="auto"></img></span>
                <span><img alt="youtube-icon" src="/youtube.png" width="50px" height="auto"></img></span>
              </div>
            </div>
          </div>
          <div className="copyright p-1">
            <p className="text-center">© Copyright 2022 Little Lemon. All rights reserved.</p>
          </div>
        </footer>
    );
  };

export default Footer;