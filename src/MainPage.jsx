import React,  { useState }  from 'react';
import { Tabbar, Page, Toolbar, Tab, Button, Input } from 'react-onsenui';



export default function MainPage() {
 

  

  const renderTabs = () => {
    return [
      {
        content: <FirstPage />,
        tab: <Tab label="Facebook" icon="md-facebook" />
      },
      {
        content: <SecondPage />,
        tab: <Tab label="Instagram" icon="md-instgram" />
      }
    ];
  };

  return (
    <Tabbar renderTabs={renderTabs} />
  );
}

function FirstPage() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);
const handleSubmit = () => {
    if (!value.match(/^https?:\/\/\S+$/)) {
      setError('Invalid URL');
    } else {
      setError(null);
      // Perform further action
    }
  }
  return (
    <Page style={{padding:'10'}}>
     
      <h2 style={{ fontWeight: '700', textAlign: 'center' }}>Facebook</h2>
      <p style={{ fontWeight: '400', textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies lectus lorem.</p>
      <Input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        type="url"
        placeholder="Enter your name"
      />
      <Button onClick={handleSubmit}>Submit</Button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </Page>
  );
}

function SecondPage() {
  return (
    <Page>
      
      <h2 style={{ fontWeight: '700', textAlign: 'center' }}>Instagram</h2>
      <p style={{ fontWeight: '400', textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies lectus lorem.</p>
    </Page>
  );
}
